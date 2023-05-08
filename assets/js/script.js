//Declare constants for DOM elements

const startButton = document.getElementById('start-btn');
const questionArea = document.getElementById("questions");
const correctScore = document.getElementById("score");
const incorrectScore = document.getElementById("incorrect");
const questionContainerElement = document.getElementById('question-container');
const answerButtonsElement = document.getElementsByClassName('ans-btn');
const rules = document.getElementById('rules');

let randomQuestionsArray, currentQuestion;
 

 
// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
// Code used from love maths project

document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByClassName("ans-btn");

  for (let button of buttons) {
      button.addEventListener("click", function() {
          if (this.getAttribute("data-type") === "a") {
              alert("You clicked Answer a!");
          } else {
              let choice = this.getAttribute("data-type");
              alert(`You clicked Answer ${choice}!`);
          }
      });
  }
});

startButton.addEventListener('click', runGame);

function runGame() {
  startButton.classList.add('hide');
  rules.classList.add('hide');
  questionContainerElement.classList.remove('hide');
  console.log('game running');
  displayQuestion(listOfQuestions);
}


function checkAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {
 
}

function displayQuestion(questions) {
    for (let i = 0; i < questions.length; i++) {
      console.log(questions[i]);
      }
      questionArea.innerText = listOfQuestions[0];
  
  }

  function nextQuestion() {

  }

function displayAnswers(answers) {
  for (let i = 0; i < answers.length; i++) 
    console.log(answers[i]);
}



const listOfQuestions = [
  "The Chinese year 2023 is represented by which animal?",
  "Which American president became known as 'Tricky Dicky'?",
  "Which insect lives in a Formicary?",
];

