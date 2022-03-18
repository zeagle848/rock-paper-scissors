import "./style.css";
import { getGameState, playRound } from "./state/game";

const buttons = document.querySelectorAll(".rps-icon");

buttons.forEach((button) => {
  // we use the .forEach method to iterate through each button
  button.addEventListener("click", function (e) {
    // and for each one we add a 'click' listener
    if (getGameState()) {
      const playButton = document.querySelector(".play-again");
      setTimeout(function () {
        playButton.style.fontSize = "16px";
      }, 100);
      playButton.style.fontSize = "18px";
    } else {
      playRound({ userChoice: e.target.id.toUpperCase() });
    }
  });
});
