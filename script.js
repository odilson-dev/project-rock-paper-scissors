function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices[getRandomInt(choices.length)];
    
}


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            return ["You lose, the paper beats the rock", 0];
        } else if (computerSelection == "scissors"){
            return ["You win, the rock beats the scissors", 1];
        } else{
            return ["You both choosed the same thing", null];
        }
    } else if (playerSelection == "paper"){
        if (computerSelection == "scissors"){
            return ["You lose, the scissors beat the paper", 0];
        } else if (computerSelection == "rock"){
            return ["You win, the paper beats the rock", 1];
        } else{
            return ["You both choosed the same thing", null];
        }
    } else if (playerSelection == "scissors"){
        if (computerSelection == "rock"){
            return ["You lose, the rock beats the scissors", 0];
        } else if (computerSelection == "paper"){
            return ["You win, the scissors beats the paper", 1];
        } else{
            return ["You both choosed the same thing\nPlease try again...", null];
        }
    } else{
        return ["Dear user, your choice is not correct! \nPlease try again...", null];
    }

}

const div = document.createElement("div");

const body = document.querySelector('body');


let playerScore = document.querySelector(".playerscore");
let playerScoreInt = 0;
playerScore.textContent = `Your score: ${playerScoreInt}`;



let pcScore = document.querySelector(".pcscore");
let pcScoreInt = 0
pcScore.textContent = `PC's score: ${pcScoreInt}`;


let pcchoice = document.querySelector(".pcchoice");

let status = document.querySelector(".status");
 



let endGameStatus = document.createElement("div");

let buttons = document.querySelectorAll("button");




buttons.forEach(button => button.addEventListener("click", (e) => {
    let computerChoice = getComputerChoice();
    
    let resultOfRound = playRound(e.target.id, computerChoice);
    

    pcchoice.textContent =`The PC's choice is ${computerChoice}`;
    status.textContent = resultOfRound[0]
    
    if(resultOfRound[1] === 1) playerScoreInt += 1;
    else if(resultOfRound[1] === 0) pcScoreInt += 1
    
    playerScore.textContent = `Your score: ${playerScoreInt}`;
    pcScore.textContent = `PC's score: ${pcScoreInt}`;

    if(playerScoreInt == 5){
        endGameStatus.textContent = "Congratulations!!!  You won!";
        endGameStatus.style.textAlign = "center";
        body.appendChild(endGameStatus);
        buttons.forEach(button => button.disabled = true)
        
    } else if (pcScoreInt == 5) {
        endGameStatus.textContent = "Game Over! You lose!"
        body.appendChild(endGameStatus);
        buttons.forEach(button => button.disabled = true)
        
    }


    
}))
