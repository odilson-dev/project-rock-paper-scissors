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
let playerScore = document.createElement("div");
let playerScoreInt = 0;

let pcScore = document.createElement("div");
let pcScoreInt = 0

let endGameStatus = document.createElement("div");


window.addEventListener("click", (e) => {
    let computerChoice = getComputerChoice();

    let resultOfRound = playRound(e.target.id, computerChoice);
    div.textContent = resultOfRound[0];

    console.log(e);
    if(resultOfRound[1] === 1) playerScoreInt += 1;
    else if(resultOfRound[1] === 0) pcScoreInt += 1
    body.appendChild(div);

    playerScore.textContent = `Your Score : ${playerScoreInt}`;
    pcScore.textContent = `PC's Score : ${pcScoreInt}`;

    body.appendChild(playerScore);
    body.appendChild(pcScore);
    
    if(playerScoreInt == 5){
        endGameStatus.textContent = "Congratulations!!!  You won!";
        body.appendChild(endGameStatus);
    } else if (pcScoreInt == 5) {
        endGameStatus.textContent = "Game Over! You lose!"
        body.appendChild(endGameStatus);
    }


    
})
