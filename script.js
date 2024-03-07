let roundsPlayed = 0;
let score =0;
// Start the first round
playRound();

function playRound() {
    // Increment roundsPlayed counter
    roundsPlayed++;

    // If roundsPlayed exceeds 5, stop the game
    if (roundsPlayed > 5) {
        console.log("Game Over");
        if(score>2){
            alert("You Won! Reload to play again");
        } else{
            alert("You Lost! Reload to play again");
        }
        return;
    }

    // Get CPU choice
    let cpuChoice = getCpuChoice();
    let userChoice;
    
    // Get user choice
    getUserChoice().then(function(choice){
        userChoice = choice; //rock beats scissors, paper beats rock, scissors beat paper
        let result = decideWinner(userChoice,cpuChoice,score);
        if(result.includes("win")){
            score++;
        } else if(result.includes("tie")){
            score+=0;
        } else {
            score--;
        }
        const currScore = document.querySelector('#scoreBoard');
        currScore.textContent = `Current Score: ${score}`;
        console.log(roundsPlayed,result,score);
        playRound();
    });


}

// Randomly selects CPU's choice
function getCpuChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let num = Math.floor(Math.random()*3);
    return choices[num];
}

// Prompts user for choice
function getUserChoice() {
    return new Promise(function(resolve, reject) {
        const rock = document.querySelector('#rock');
        const paper = document.querySelector('#paper');
        const scissors = document.querySelector('#scissors');

        rock.addEventListener('click', function(){
            resolve('rock');
        });

        paper.addEventListener('click', function(){
            resolve('paper');
        });

        scissors.addEventListener('click', function(){
            resolve('scissors');
        });
    });
}

// Event listener to play audio when images are clicked
const images = document.querySelectorAll('#rock, #paper, #scissors');
images.forEach(images=>{
    images.addEventListener('click', playAudio);
});

function playAudio(event){
    const audio = document.querySelector('#audio');
    audio.play();
    const clickedImage = event.target;
        clickedImage.classList.add('shake');

        // Remove shake class after 500ms
        setTimeout(function() {
            clickedImage.classList.remove('shake');
        }, 500);
    
}

function decideWinner(userChoice,cpuChoice,score){

    if((userChoice=='rock'&&cpuChoice=='scissors') || (userChoice=='paper'&&cpuChoice=='rock') || (userChoice=='scissors')&&(cpuChoice=='paper')){
        const dialog = document.querySelector('#result');
        dialog.textContent = `CPU Chose:${cpuChoice}, You Chose:${userChoice} | ${userChoice} beats ${cpuChoice}`;
        return 'win';
    }
    else if(userChoice==cpuChoice){
        const dialog = document.querySelector('#result');
        dialog.textContent = "It's a tie!";
        return 'tie';
    }
    else {
        const dialog = document.querySelector('#result');
        dialog.textContent = `CPU Chose:${cpuChoice}, You Chose:${userChoice} | ${cpuChoice} beats ${userChoice}`;
        return 'loss';
    }
}


