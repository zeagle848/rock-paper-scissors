let gamesWon = 0; //If this reaches 2 then you have won
let gamesLost = 0; //If this reaches 2 then you have lost

const buttons = document.querySelectorAll('.rps-icon');

buttons.forEach((button) => { // we use the .forEach method to iterate through each button
  button.addEventListener('click', function (e) {// and for each one we add a 'click' listener
    playRound(e.target.id.toUpperCase());
  });  
});

function playRound(userChoice){
    let randomNum = Math.floor(getRandom()); //This will generate a random number
    let compChoice; //This variable will hold the computers choice

    switch (randomNum) {//This switch statement will see what random number has been generated and then assign either rock, paper or scissors
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

    if(didUserWin(userChoice, compChoice)){ //This if statement calls the didUserWin function. If true then the program will go into the body of the if statement
            gamesWon += 1; 
            winAlert(userChoice, compChoice); //The winAlert function alerts the user that they won and also tells the user what the computer chose
            if(gamesWon===5){ //If the gamesWon value reaches 2 then the user has won
                
            }
        }
        else if (didUserWin(userChoice, compChoice)===false){ //The same  as before. If the user has lost a round then the program will enter the body of the if statement
            gamesLost += 1; 
            loseAlert(userChoice, compChoice); //The lose alert function alerts the user that they have lost and also tells the user what the computer chose
            if(gamesLost===5){ //If  the gamesLost value reaches 2 the the user has lost
                
            }
        }
        else if (didUserWin(userChoice, compChoice) === undefined){ //The didUserWin function will return undefined if the user and the computer chose the same option

        }
}

function getRandom() {
    return Math.random() * (3 - 1) + 1; //Generates a random number between 1 and 3
}


function didUserWin(userChoice, compChoice){ //This function checks whether the user has won or lost the round. If its a draw then the function returns undefined
    if(userChoice==="ROCK" && compChoice ==="PAPER"){
        return false;
    }
    else if(userChoice==="PAPER" && compChoice ==="ROCK"){
        return true;
    }
    else if(userChoice==="SCISSORS" && compChoice ==="PAPER"){
        return true;
    }
    else if(userChoice==="PAPER" && compChoice ==="SCISSORS"){
        return false;
    }
    else if(userChoice==="SCISSORS" && compChoice ==="ROCK"){
        return false;
    }
    else if(userChoice==="ROCK" && compChoice ==="SCISSORS"){
        return true;
    }
    else{
        return undefined;
    }
}

function winAlert(userChoice, compChoice){ //This function generates the round won message for the user
    if(userChoice==="PAPER" && compChoice ==="ROCK"){
        alert("Computer chose rock, you win this round");
    }
    else if(userChoice==="SCISSORS" && compChoice ==="PAPER"){
        alert("Computer chose paper, you win this round");
    }
    else if(userChoice==="ROCK" && compChoice ==="SCISSORS"){
        alert("Computer chose scissors, you won this round");
    }
}

function loseAlert(userChoice, compChoice){ //This function generates the round lost message for the user
    if(userChoice==="ROCK" && compChoice ==="PAPER"){
        alert("Computer chose paper, you lost this round");
        return false;
    }
    else if(userChoice==="PAPER" && compChoice ==="SCISSORS"){
        alert("Computer chose scissors, you lost this round");
        return false;
    }
    else if(userChoice==="SCISSORS" && compChoice ==="ROCK"){
        alert("Computer chose rock, you lost this round");
        return false;
    }
}
