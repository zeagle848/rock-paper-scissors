let gamesWon = 0; //If this reaches 2 then you have won
let gamesLost = 0; //If this reaches 2 then you have lost
let keepGoing = true; //This variable controls whether the main while loop runs or not

while(keepGoing){
    let falseInput = true; //This falseInput value controls the while loop below
    let userChoice; //This variable holds the user input

    while(falseInput){ //This while loop runs until the user enters a correct input
        userChoice = prompt("Choose rock, paper or scissors") //This prompts the user to choose either rock, paper or scissors
        if(checkUserChoice(userChoice)){ 
            falseInput = false; //If the user picks one of the valid options the falseInput varaible will be changed to false
        }
        else{
            alert("You didn't choose rock, paper or scissors") //If the user enters anything but a correct option the while loop will run until the user does 
        }
    }

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

    userChoice = userChoice.toUpperCase(); //These two lines will change the users input to uppercase incase the user entered their choice in lowercase
    compChoice = compChoice.toUpperCase();

    if(didUserWin(userChoice, compChoice)){ //This if statement calls the didUserWin function. If true then the program will go into the body of the if statement
        gamesWon += 1; 
        winAlert(userChoice, compChoice); //The winAlert function alerts the user that they won and also tells the user what the computer chose
        if(gamesWon>=2){ //If the gamesWon value reaches 2 then the user has won
            alert("CONGRATULATIONS! YOU WON!")
            keepGoing = false; //The keepGoing value will be set to false if the user has won
        }
    }
    else if (didUserWin(userChoice, compChoice)===false){ //The same  as before. If the user has lost a round then the program will enter the body of the if statement
        gamesLost += 1; 
        loseAlert(userChoice, compChoice); //The lose alert function alerts the user that they have lost and also tells the user what the computer chose
        if(gamesLost>=2){ //If  the gamesLost value reaches 2 the the user has lost
            alert("Sorry, you lost :(")
            keepGoing = false; //The keepGoing value will be set to false if the user has lost
        }
    }
    else if (didUserWin(userChoice, compChoice) === undefined){ //The didUserWin function will return undefined if the user and the computer chose the same option
        alert("The computer chose the same as you.")
    }


    if(keepGoing === false){
        let playAgain = prompt("Do you want to play again?").toUpperCase(); //This prompts the user to see if they want to play again 
        if(playAgain === "YES"){ 
            keepGoing = true; //If the user decides that they do want to play again then the keepGoing value will be set to true
            gamesLost = 0; //Sets gamesLost to 0
            gamesWon = 0; //Sets gamesWOn to 0
        }

    }

}

function getRandom() {
    return Math.random() * (3 - 1) + 1; //Generates a random number between 1 and 3
}

function checkUserChoice(userChoice){ //This functions checks whether the user has given a valid input
    if(userChoice === "rock" ||userChoice === "Rock"||
        userChoice === "paper"||userChoice === "Paper"||
        userChoice === "scissors"||userChoice === "Scissors"){
            return true;
        }
    else{
        return false;
    }
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
