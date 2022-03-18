const gameState = document.querySelector("#game-state");
const userScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#computer-score");
const scoreContainer = document.querySelector("#score-container");
const playButton = document.createElement("button");

let gamesWon = 0;
let gamesLost = 0;

let gameOver = false;

function getRandom() {
  return Math.random() * (3 - 1) + 1; //Generates a random number between 1 and 3
}

function didUserWin({ userChoice, compChoice }) {
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

function winAlert({ userChoice, compChoice }) {
  //This function generates the round won message for the user
  userScore.textContent = `User: ${gamesWon}`;

  gameState.style.color = "green";

  if (userChoice === "PAPER" && compChoice === "ROCK") {
    gameState.textContent = "You won! Computer chose ROCK";
  } else if (userChoice === "SCISSORS" && compChoice === "PAPER") {
    gameState.textContent = "You won! Computer chose PAPER";
  } else if (userChoice === "ROCK" && compChoice === "SCISSORS") {
    gameState.textContent = "You won! Computer chose SCISSORS";
  }
}

function loseAlert({ userChoice, compChoice }) {
  //This function generates the round lost message for the user
  computerScore.textContent = `Computer: ${gamesLost}`;

  gameState.style.color = "red";

  if (userChoice === "ROCK" && compChoice === "PAPER") {
    gameState.textContent = "You lost. Computer chose PAPER";
  } else if (userChoice === "PAPER" && compChoice === "SCISSORS") {
    gameState.textContent = "You lost. Computer chose SCISSORS";
  } else if (userChoice === "SCISSORS" && compChoice === "ROCK") {
    gameState.textContent = "You lost. Computer chose ROCK";
  }
}

function playAgain() {
  gameOver = true;

  playButton.classList.add("play-again");
  playButton.textContent = "Play again?";

  scoreContainer.appendChild(playButton);

  playButton.addEventListener("click", function () {
    gamesWon = 0;
    gamesLost = 0;

    userScore.textContent = `User: ${gamesWon}`;
    computerScore.textContent = `Computer: ${gamesLost}`;

    gameState.textContent = "";

    playButton.remove();

    gameOver = false;
  });
}

export function getGameState() {
  return gameOver;
}

export function playRound({ userChoice }) {
  const randomNum = Math.floor(getRandom()); //This will generate a random number
  let compChoice;

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

  if (didUserWin({ userChoice, compChoice })) {
    gamesWon += 1;
    winAlert({ userChoice, compChoice });
    if (gamesWon === 5) {
      gameState.style.color = "black";
      gameState.textContent = "YOU WON THE GAME!";
      playAgain();
    }
  } else if (didUserWin({ userChoice, compChoice }) === false) {
    gamesLost += 1;
    loseAlert({ userChoice, compChoice });
    if (gamesLost === 5) {
      gameState.style.color = "black";
      gameState.textContent = "YOU LOST THE GAME :(";
      playAgain();
    }
  } else if (didUserWin({ userChoice, compChoice }) === undefined) {
    gameState.style.color = "#FFE84A";
    gameState.textContent = "Computer chose the same as you.";
  }
}
