// We are going to be creating a Rock Paper Scissors game 
// This game is going to be played with the computer!


// // // // We are going to create buttons and a play environment so that 
// // // //  the game could be played on the page rather than the console!
// // Lets start with creating the div for buttons!
const buttonsDiv = document.createElement('div');
buttonsDiv.classList.add('buttons');
// document.body.appendChild(buttonsDiv);
// // Create the buttons
const btnR = document.createElement('button');
const btnP = document.createElement('button');
const btnS = document.createElement('button');
btnR.id = "rock"; btnR.textContent = "ROCK"; btnR.classList.add('buttons')
btnP.id = "paper"; btnP.textContent = "PAPER"; btnP.classList.add('buttons')
btnS.id = "scissors"; btnS.textContent = "SCISSORS"; btnS.classList.add('buttons')
buttonsDiv.appendChild(btnR); buttonsDiv.appendChild(btnP); buttonsDiv.appendChild(btnS);
/*Lets create the information box which is going to include:
Info about each game, Current Game Status,and Scores */
const container = document.createElement('div');
container.classList.add('information');
document.body.appendChild(container);
// // Create the Result Text Box;
const playInfo = document.createElement('p');
playInfo.id = "playInfo";
playInfo.textContent = "Here is going to be the info about each game!";
container.appendChild(playInfo);
// // Create the Information about the ongoing game;
const gameStat = document.createElement('p');
gameStat.id = 'infoGame';
gameStat.textContent = "This is going to be the game status"
container.appendChild(gameStat);
// // Create a ScoreBox
const scoreBox = document.createElement('p');
scoreBox.id = "scoreBox";
scoreBox.textContent = "SCORES";
container.appendChild(scoreBox);
// // Create the Final Result Box 
const finalResult = document.createElement('p');
finalResult.id = 'finalResult';
finalResult.textContent = "";
document.body.appendChild(finalResult);

// Create a replay button:
const btnReplay = document.createElement('button');
btnReplay.id = 'btnReplay';
btnReplay.textContent = 'REPLAY';
btnReplay.style.cssText = 'margin:20px auto 20px auto';
document.body.appendChild(btnReplay);
btnReplay.style.display = 'none';
 document.body.appendChild(buttonsDiv);
/*-------------------------------------------------------------------------------*/
"TEXT ANIMATION: "
const splitPlayInfo = playInfo.textContent.split('');
const splitGameStat = gameStat.textContent.split('');
const splitScoreBox = scoreBox.textContent.split('');
playInfo.textContent = '';
gameStat.textContent = '';
scoreBox.textContent = '';
for (let i = 0;i <splitPlayInfo.length;i++) {
    playInfo.innerHTML += "<span>" + splitPlayInfo[i] + "</span>";
}
for (let i = 0;i <splitGameStat.length;i++) {
    gameStat.innerHTML += "<span>" + splitGameStat[i] + "</span>";
}
for (let i = 0;i <splitScoreBox.length;i++) {
    scoreBox.innerHTML += "<span>" + splitScoreBox[i] + "</span>";
}

let timer1 = setInterval(onTickPlay,50); // onTick function is gonna run in every 50 milliseconds
let timer2 = setInterval(onTickGame,50);
let timer3 = setInterval(onTickScore,50);

function complete(timer){
    clearInterval(timer);
    timer = null;
}

let char1 = 0;
function onTickPlay() {
    const span = playInfo.querySelectorAll('span')[char1];
    span.classList.add('fade');
    char1++
    if(char1 == splitPlayInfo.length) {
        complete(timer1);
        return;
    }
}

let char2 = 0;
function onTickGame() {
    const span = gameStat.querySelectorAll('span')[char2];
    span.classList.add('fade');
    char2++
    if(char2 == splitGameStat.length) {
        complete(timer2);
        return;
    }
}

let char3 = 0;
function onTickScore() {
    const span = scoreBox.querySelectorAll('span')[char3];
    span.classList.add('fade');
    char3++
    if(char3 == splitScoreBox.length) {
        complete(timer3);
        return;
    }
}

/*--------------------------------------------------------------------------------*/
// // // // LETS MAKE THE MAGIC HAPPEN!
const buttons = document.querySelectorAll('button');
let computerWinCount = 0;
let playerWinCount = 0;

buttons.forEach(button => button.addEventListener('click',function theGame() {

    let answer = button.id;
    let computerSelection = computerPlay();
   
    newResult = playGame(answer,computerSelection);
    if (newResult.includes("Win!")) {
        playerWinCount += 1;
        gameStat.style.cssText = 'color:darkgreen;'
    } else if(newResult.includes("lose!")) {
        gameStat.style.cssText = 'color:darkred;'
        computerWinCount += 1;
    } else {
        gameStat.style.cssText = 'color:bisque;'
    }
    playInfo.textContent = `You Played: ${answer.toUpperCase()} - Computer Played: ${computerSelection.toUpperCase()}`;
    gameStat.textContent = newResult;
    scoreBox.textContent = `You: ${playerWinCount} - Computer: ${computerWinCount}`;
    
    if (playerWinCount == 5 && computerWinCount < 5) {
        finalResult.textContent = "YOU WON!";
        finalResult.style.cssText = 'color:green;text-align:center;font-size:5rem;'
        buttons.forEach(button => button.style.display = 'none');
        playInfo.style.display = 'none';
        gameStat.style.display = 'none';
        //scoreBox.style.display = 'none';
        btnReplay.style.display = 'block';
    } else if (playerWinCount < 5 && computerWinCount == 5) {
        finalResult.textContent = "YOU LOSE!";
        finalResult.style.cssText = 'color:red;text-align:center;font-size:5rem;'
        buttons.forEach(button => button.style.display = 'none');
        playInfo.style.display = 'none';
        gameStat.style.display = 'none';
        //scoreBox.style.display = 'none';
        btnReplay.style.display = 'block';
    }
    btnReplay.addEventListener('click',() =>{
        buttons.forEach(button => button.style.display = 'flex');
        computerWinCount = 0;
        playerWinCount = 0;
        playInfo.style.display = 'block';
        gameStat.style.display = 'block';
        //scoreBox.style.display = 'block';
        playInfo.textContent = "Here is going to be the info about each game!";
        gameStat.textContent = "This is going to be the game status";
        gameStat.style.cssText = 'color:rgb(11, 163, 209);'
        scoreBox.textContent = "SCORES";
        btnReplay.style.display = 'none';
        finalResult.textContent = "";
    })

}));


/*-------------------------------------------------------------------------------*/

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


