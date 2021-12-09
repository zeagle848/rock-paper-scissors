import "./style.css";

let gamesWon = 0; //If this reaches 2 then you have won
let gamesLost = 0; //If this reaches 2 then you have lost
let gameOver = false;

const buttons = document.querySelectorAll(".rps-icon");

buttons.forEach((button) => {
  // we use the .forEach method to iterate through each button
  button.addEventListener("click", function (e) {
    // and for each one we add a 'click' listener
    if (gameOver) {
      const playButton = document.querySelector(".play-again");
      setTimeout(function () {
        playButton.style.fontSize = "16px";
      }, 100);
      playButton.style.fontSize = "18px";
    } else {
      playRound(e.target.id.toUpperCase());
    }
  });
});

function playRound(userChoice) {
  let randomNum = Math.floor(getRandom()); //This will generate a random number
  let compChoice; //This variable will hold the computers choice

  switch (
    randomNum //This switch statement will see what random number has been generated and then assign either rock, paper or scissors
  ) {
    case 1:
      compChoice = "Rock";
      break;
    case 2:
      compChoice = "Paper";
      break;
    case 3:
      compChoice = "Scissors";
      break;
  }

  compChoice = compChoice.toUpperCase();
  const gameState = document.querySelector("#game-state");
  if (didUserWin(userChoice, compChoice)) {
    //This if statement calls the didUserWin function. If true then the program will go into the body of the if statement
    gamesWon += 1;
    winAlert(userChoice, compChoice); //The winAlert function alerts the user that they won and also tells the user what the computer chose
    if (gamesWon === 5) {
      //If the gamesWon value reaches 2 then the user has won
      gameState.style.color = "black";
      gameState.textContent = "YOU WON THE GAME!";
      playAgain();
    }
  } else if (didUserWin(userChoice, compChoice) === false) {
    //The same  as before. If the user has lost a round then the program will enter the body of the if statement
    gamesLost += 1;
    loseAlert(userChoice, compChoice); //The lose alert function alerts the user that they have lost and also tells the user what the computer chose
    if (gamesLost === 5) {
      //If  the gamesLost value reaches 2 the the user has lost
      gameState.style.color = "black";
      gameState.textContent = "YOU LOST THE GAME :(";
      playAgain();
    }
  } else if (didUserWin(userChoice, compChoice) === undefined) {
    //The didUserWin function will return undefined if the user and the computer chose the same option
    gameState.style.color = "#FFE84A";
    gameState.textContent = "Computer chose the same as you.";
  }
}

function playAgain() {
  gameOver = true;
  const scoreContainer = document.querySelector("#score-container");
  const playButton = document.createElement("button");

  playButton.classList.add("play-again");
  playButton.textContent = "Play again?";

  scoreContainer.appendChild(playButton);

  playButton.addEventListener("click", function () {
    gamesWon = 0;
    gamesLost = 0;

    const userScore = document.querySelector("#user-score");
    userScore.textContent = `User: ${gamesWon}`;
    const computerScore = document.querySelector("#computer-score");
    computerScore.textContent = `Computer: ${gamesLost}`;

    const gameState = document.querySelector("#game-state");
    gameState.textContent = "";

    playButton.remove();

    gameOver = false;
  });
}

function getRandom() {
  return Math.random() * (3 - 1) + 1; //Generates a random number between 1 and 3
}

function didUserWin(userChoice, compChoice) {
  //This function checks whether the user has won or lost the round. If its a draw then the function returns undefined
  if (userChoice === "ROCK" && compChoice === "PAPER") {
    return false;
  } else if (userChoice === "PAPER" && compChoice === "ROCK") {
    return true;
  } else if (userChoice === "SCISSORS" && compChoice === "PAPER") {
    return true;
  } else if (userChoice === "PAPER" && compChoice === "SCISSORS") {
    return false;
  } else if (userChoice === "SCISSORS" && compChoice === "ROCK") {
    return false;
  } else if (userChoice === "ROCK" && compChoice === "SCISSORS") {
    return true;
  } else {
    return undefined;
  }
}

function winAlert(userChoice, compChoice) {
  //This function generates the round won message for the user
  const userScore = document.querySelector("#user-score");
  userScore.textContent = `User: ${gamesWon}`;

  const gameState = document.querySelector("#game-state");
  gameState.style.color = "green";

  if (userChoice === "PAPER" && compChoice === "ROCK") {
    gameState.textContent = "You won! Computer chose ROCK";
  } else if (userChoice === "SCISSORS" && compChoice === "PAPER") {
    gameState.textContent = "You won! Computer chose PAPER";
  } else if (userChoice === "ROCK" && compChoice === "SCISSORS") {
    gameState.textContent = "You won! Computer chose SCISSORS";
  }
}

function loseAlert(userChoice, compChoice) {
  //This function generates the round lost message for the user
  const computerScore = document.querySelector("#computer-score");
  computerScore.textContent = `Computer: ${gamesLost}`;

  const gameState = document.querySelector("#game-state");
  gameState.style.color = "red";

  if (userChoice === "ROCK" && compChoice === "PAPER") {
    gameState.textContent = "You lost. Computer chose PAPER";
  } else if (userChoice === "PAPER" && compChoice === "SCISSORS") {
    gameState.textContent = "You lost. Computer chose SCISSORS";
  } else if (userChoice === "SCISSORS" && compChoice === "ROCK") {
    gameState.textContent = "You lost. Computer chose ROCK";
  }
}
