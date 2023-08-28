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
            return "You lose, the paper beats the rock";
        } else if (computerSelection == "scissors"){
            return "You win, the scissors beat the rock";
        } else{
            return "You both choosed the same thing";
        }
    } else if (playerSelection == "paper"){
        if (computerSelection == "scissors"){
            return "You lose, the scissors beat the paper";
        } else if (computerSelection == "rock"){
            return "You win, the paper beats the rock";
        } else{
            return "You both choosed the same thing";
        }
    } else if (playerSelection == "scissors"){
        if (computerSelection == "rock"){
            return "You lose, the rock beats the scissors";
        } else if (computerSelection == "paper"){
            return "You win, the scissors beats the paper";
        } else{
            return "You both choosed the same thing";
        }
    } else{
        return "Dear user, your choice is not correct!";
    }

}

let playerchoice = prompt("Welcome dear player, Please choose between: 'rock', 'paper', 'scissors'");

let computerchoice = getComputerChoice();

console.log(`computer choice => ${computerchoice}
playerchoice => ${playerchoice}`);



console.log(playRound(playerchoice, computerchoice));
