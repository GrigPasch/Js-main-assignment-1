let numberWon = 0; 
let noImpact = 0; 
let numberLost = 0; 
let score = [numberWon, noImpact, numberLost];
let choices = ["Rock", "Paper", "Scissors"]; 

let userPlay = function(){
    let playerChoice = window.prompt("Please decide between rock, paper or scissors");
    console.log(playerChoice);

if ((playerChoice.toLowerCase() !== "Rock") ||
    (playerChoice.toLowerCase() !== "Paper") ||
    (playerChoice.toLowerCase() !== "Scissors")){
    
        return; 
}
playerChoice = playerChoice.toLowerCase(); 


if (playerChoice.toLowerCase() === computerChoice){
    noImpact++; 
    window.alert("Nothing is happening. Must be a tie"); 
}else if ((playerChoice.toLowerCase() === "Rock" && computerChoice === "Scissors") ||
          (playerChoice.toLowerCase() === "Paper" && computerChoice === "Rock") ||
          (playerChoice.toLowerCase() === "Scissors" && computerChoice === "Paper")){
    
            numberWon++;
            window.alert("Point for humanity");
}else if((playerChoice.toLowerCase() === "Rock" && computerChoice === "Paper") ||
         (playerChoice.toLowerCase() === "Paper" && computerChoice === "Scissors") ||
         (playerChoice.toLowerCase() === "Scissors" && computerChoice === "Rock")){
    
            numberLost++;
            window.alert("AI takes the win."); 
}
console.log(score[numberWon, noImpact, numberLost]);

window.alert(
   "Scoreboard:\nWins: " + numberWon + "\nLosses: " + numberLost + "\nTies: " + noImpact 
);

let replay = window.alert("Would You Like To Play Again?"); 

if(replay = true) {
    userPlay();
    computerPlay();
}
};

let computerPlay = function(){
    let index = Math.floor(Math.random() * choices.length); 
    let computerChoice = choices[index]; 

    window.alert("The computer picked " + computerChoice);
    console.log(computerChoice);
};

userPlay();
computerPlay();