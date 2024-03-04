function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random()*3);  //generates random number between 0,1 and 2
    return choices[randomIndex];
}

function getUserChoice(){
    let choice = prompt("Enter Your Choice", "");
    return choice.toLowerCase();
}

function playGame(computerChoice,userChoice){           // rock beats scissors, paper beats rock, scissors beat paper
        if(computerChoice==userChoice){
            return(`It's a tie!, both of us chose ${computerChoice}`);
        } else if ((userChoice=='rock' && computerChoice=='scissors') || (userChoice=='paper' && computerChoice == 'rock') || (userChoice=='scissors' && computerChoice =='paper')){
            return(`You Win! ${userChoice} beats ${computerChoice}`);
        } else return (`Sorry you lost! ${computerChoice} beats ${userChoice}.`);

}
function startGame(score){
let computerChoice = getComputerChoice();
let userChoice = getUserChoice();
let result;
    result=playGame(computerChoice,userChoice,score);
    if(result.includes("You Win!")){
        score++;
    } else if(result.includes("Sorry")){
        score--;
    } else {
        score+=0;
    }
    console.log(result+ " | Score: "+score);
    return score;
}

let score=0;
for(let i =0; i<6;i++){
    score = startGame(score);
}
if(score>2) console.log(`You win after 5 rounds with a score of ${score}.`);
else console.log(`You lost after 5 rounds with a score of ${score}.`);

