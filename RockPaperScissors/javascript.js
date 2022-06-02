// console.log("Hello World!");

// We are going to be creating a Rock Paper Scissors game 
//  Which is going to be played by using console!

// This game is going to be played with the computer!


// Let's just create a function for computer to select random choice
//  In between Rock-Paper-Scissors
let computerPlay = () => {
    let randomNumber = Math.floor(Math.random()*3);
    let choiceComputer = "";
    switch(randomNumber) {
        case 0:
            choiceComputer = "Rock";
            break;
        case 1:
            choiceComputer = "Paper";
            break;
        case 2:
            choiceComputer = "Scissors";
            break;
    
    }
    return choiceComputer; 
}


let ResultText;
// Lets define the rules of the play!
let playGame = (playerChoice,computerPlay) => {

    if (playerChoice.toLowerCase() == computerPlay.toLowerCase()) {
        ResultText = (`Same choice as ${playerChoice.toLowerCase()}. So, there is no winner at this time!`);
    
    } else if ((playerChoice.toLowerCase() == "rock") && (computerPlay.toLowerCase() == "paper")) {
        ResultText = ("Paper Beats Rock! You lose!");     
        //computerWinCount += 1;
    } else if ((playerChoice.toLowerCase() == "rock") && (computerPlay.toLowerCase() == "scissors")) {
        ResultText = ("Rock Beats Scissors! You Win!");
        //playerWinCount += 1;
    } else if ((playerChoice.toLowerCase() == "paper") && (computerPlay.toLowerCase() == "rock")) {
        ResultText = ("Paper Beats Rock! You Win!");
        //playerWinCount += 1;
    } else if ((playerChoice.toLowerCase() == "paper") && (computerPlay.toLowerCase() == "scissors")) {
        ResultText = ("Scissors Beats Paper! You lose!");
        //computerWinCount += 1;
    } else if ((playerChoice.toLowerCase() == "scissors") && (computerPlay.toLowerCase() == "rock")) {
        ResultText = ("Rock Beats Scissors! You lose!");
        //computerWinCount += 1;
    } else if ((playerChoice.toLowerCase() == "scissors") && (computerPlay.toLowerCase() == "paper")) {
        ResultText = ("Scissors Beats Paper! You Win!");
        //playerWinCount += 1;
    } else {
        ResultText = ("Wrong Answer Please Try Again!");
    }
    return ResultText;

}       

// console.log(playGame("Rock",computerPlay()));

// Lets create the Game!
let game = () => {
    let computerWinCount = 0;
    let playerWinCount = 0;
    console.log("%cWelcome to Rock, Paper, Scissors Game!","color:white; font-weight:800; font-size:20px; padding:5px;margin:5px;");
    console.log("%cPlease Make a Choice!","color:darkgrey;font-size:14px;");
    let selection = ""
    for (let round = 0; round < 5; round++) {
        selection = prompt("Rock, Paper, or Scissors?");
        computerSelection = computerPlay();
        let result = playGame(selection,computerSelection);
        console.log(`%c+ You played: %c${selection.toLowerCase()}`,"color:yellow;font-weight:500","color:white;font-weight:500");
        console.log(`%c- Computer Played: %c${computerSelection.toLowerCase()}`,"color:yellow;font-weight:500","color:white;font-weight:500");
        if (result.includes("Win!")) {
            playerWinCount += 1;
            console.log("%c ** " + result + " ** ","color:darkgreen;font-weight:700;font-size:12px;");        
        } else if(result.includes("lose!")) {
            computerWinCount += 1;
            console.log("%c ** " + result + " ** ","color:darkred;font-weight:700;font-size:12px;")
        } else {
            console.log("%c ** " + result + " ** ","color:bisque;font-size:12px;")
        }
        console.log(`You: ${playerWinCount} - Computer: ${computerWinCount}`);
    }
    // console.log(`Player Win Count: ${playerWinCount}`);
    // console.log(`Computer Win Count: ${computerWinCount}`);
    if (playerWinCount > computerWinCount) {
        console.log("%cCongrats! You Won!","color:green; font-size:14px;");
    } else if (playerWinCount == computerWinCount) {
        console.log("%cThe match ended in draw! Try again...", "color:yellow; font-size:14px")
    } else {
        console.log("%cYou lost! Try again...","color: red; font-size:14px;")
    }
}

game();
