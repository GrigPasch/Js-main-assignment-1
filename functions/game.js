let computerMessages = document.querySelector('[data-computerChoice]');
let playerOption = document.querySelector('[data-playerChoice]');
let tieMessages = document.querySelector('[data-tie]');
let playerScore = document.querySelector('[data-playerScore]');
playerScoreCount = 0;
let computerScore = document.querySelector('[data-AIScore]');
computerScoreCount = 0;

function updatePlayerScore(){
    playerScore.textContent = ++playerScoreCount;
}

function updateComputerScore(){
    computerScore.textContent = ++computerScoreCount;
}

function computerPlay(){
    const computerPlay = ["Rock", "Paper", "Scissors"];
    let computerChoice = computerPlay[Math.floor(Math.random()*computerPlay.length)];
    computerMessages.textContent = computerChoice;

    return computerChoice;
}

function playRound() {
    const rockOption = document.querySelector('#rock');
    rockOption.addEventListener('click', function rockButton(){
        playerOption.textContent = "Rock";
        const computerSelect = computerPlay();

        if(computerMessages.textContent == "Rock" && playerOption.textContent == "Rock"){
                tieMessages.textContent = "Uh oh! You and the Computer got Rock! Try again!"
        }
        if(computerMessages.textContent == "Paper" && playerOption.textContent == "Rock"){
                updateComputerScore();
                tieMessages.textContent = "Computer wins - try again!"
        }
        if(computerMessages.textContent == "Scissors" && playerOption.textContent == "Rock"){
                updatePlayerScore();
                tieMessages.textContent = "Player wins - well done!"
        }
    });
    const paperOption = document.querySelector('#paper');

    paperOption.addEventListener('click', function paperButton(){
        playerOption.textContent = "Paper";
        const computerSelect = computerPlay();

        if(computerMessages.textContent == "Paper" && playerOption.textContent == "Paper"){
                tieMessages.textContent = "Uh oh! You and the Computer got Paper! Try again!"
        }
        if(computerMessages.textContent == "Rock" && playerOption.textContent == "Paper"){
                updatePlayerScore();
                tieMessages.textContent = "Player wins - well done!"
        }
        if(computerMessages.textContent == "Scissors" && playerOption.textContent == "Paper"){
                updateComputerScore();
                tieMessages.textContent = "Computer wins - try again!"
        }   
    });
     const scissorsOption = document.querySelector('#scissors');

     scissorsOption.addEventListener('click', function scissorsButton(){
         playerOption.textContent = "Scissors";
         const computerSelect = computerPlay();
 
         if(computerMessages.textContent == "Scissors" && playerOption.textContent == "Scissors"){
                tieMessages.textContent = "Uh oh! You and the Computer got Scissors! Try again!"
         }
         if(computerMessages.textContent == "Rock" && playerOption.textContent == "Scissors"){
                updatePlayerScore();
                tieMessages.textContent = "Player wins - well done!"
        }
        if(computerMessages.textContent == "Paper" && playerOption.textContent == "Scissors"){
                updateComputerScore();
                tieMessages.textContent = "Player wins - well done!"
        }
        winnerDeclaration();
     });

    }

    function winnerDeclaration(){
        if(computerScore.textContent == "5"){
                playerScoreCount = 0;
                computerScoreCount = 0;
                computerScore.textContent = computerScoreCount;
                playerScore.textContent = playerScoreCount;
                tieMessages.textContent = "You lost to the Computer - try again!"
        } 
        if(playerScore.textContent == "5"){
                playerScoreCount = 0;
                computerScoreCount = 0;
                computerScore.textContent = computerScoreCount;
                playerScore.textContent = playerScoreCount;
                tieMessages.textContent = "You won - well done!"
        }
    }

    playRound();