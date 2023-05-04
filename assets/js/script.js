// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
      button.addEventListener("click", function() {
          if (this.getAttribute("data-type") === "a") {
              alert("You clicked Answer a!");
          } else {
              let gameType = this.getAttribute("data-type");
              alert(`You clicked Answer ${gameType}!`);
          }
      });
  }
});




function runGame() {

}

function checkAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayQuestion() {

}

function displayMultipleChoice1() {

}


  