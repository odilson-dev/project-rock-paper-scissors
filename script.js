function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[getRandomInt(choices.length)];
    
}
console.log(getComputerChoice());