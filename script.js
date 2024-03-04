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

let computerChoice = getComputerChoice();
let userChoice = getUserChoice();
let result = playGame(computerChoice,userChoice);
console.log(result);
