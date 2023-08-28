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
            return ["You both choosed the same thing", 2];
        }
    } else if (playerSelection == "paper"){
        if (computerSelection == "scissors"){
            return ["You lose, the scissors beat the paper", 0];
        } else if (computerSelection == "rock"){
            return ["You win, the paper beats the rock", 1];
        } else{
            return ["You both choosed the same thing", 2];
        }
    } else if (playerSelection == "scissors"){
        if (computerSelection == "rock"){
            return ["You lose, the rock beats the scissors", 0];
        } else if (computerSelection == "paper"){
            return ["You win, the scissors beats the paper", 1];
        } else{
            return ["You both choosed the same thing\nPlease try again...", 2];
        }
    } else{
        return ["Dear user, your choice is not correct! \nPlease try again...", 2];
    }

}

function game(){
    let rounds = 1;
    let score = 0;
    while (rounds <= 5){
        let playerchoice = prompt("Welcome dear player, Please choose between: 'rock', 'paper', 'scissors'");

        let computerchoice = getComputerChoice();

        let result = playRound(playerchoice, computerchoice);
        if (result[1] == 1){
            console.log(result[0]);
            score++;
        } else if(result[1] == 0){
            console.log(result[0]);
        } else if (result[1] == 2){
            console.log(result[0]);
            continue;
        }
        console.log(`Computer choice => ${computerchoice}
Playerchoice => ${playerchoice}
Round: ${rounds}`);
        rounds++;
    }

    console.log(`GAME OVER
Your score is ${score}/5`);
}


game();
