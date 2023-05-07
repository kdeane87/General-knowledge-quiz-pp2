//Declare constants for DOM elements

const startButton = document.getElementById('start-btn');
const questionArea = document.getElementById("questions");
const correctScore = document.getElementById("score");
const incorrectScore = document.getElementById("incorrect");
const questionContainerElement = document.getElementById('question-container');
const answerButtonsElement = document.getElementById('answer-buttons');

 //List of questions and answers for the quiz

 
// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName("button");

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



const questions = [
  {
      id: 0,     
      question: "Blondie was the name of the dog belonging to which dictator?",
      answers: {
          a: 'Stalin',
          b: 'Mussolini',
          c: 'Hitler'
        },
        correctAnswer: 'c'
      },
      {
          id: 1,
          question: " Related to the llama, which South American mammal has long shaggy hair?",
      answers: {
          a: 'Alpaca',
          b: 'Common opossum',
          c: 'Silky anteater'
        },
        correctAnswer: 'a'

      },
      {
          id: 2,
          question: "According to the proverb, Necessity is the mother of…What?",
          answers: {
              a: 'Creation',
              b: 'Discovery',
              c: 'Invention'
            },
            correctAnswer: 'c'
  
          },
          {
            id: 3,
              question: 'Which statesman is quoted as saying “From Stettin in the Baltic to Trieste in the Adriatic, an iron curtain has descended across the continent”?',
              answers: {
                  a: 'Micheal Collins',
                  b: 'Winston Churchill',
                  c: 'Ronald Reagan'
                },
                correctAnswer: 'b'

          },
          {
            id: 4,
              question: "In chemistry what is the smallest part of an element that can take part in a chemical reaction?",
              answers: {
                  a: 'Molecule',
                  b: 'Atom',
                  c: 'Electron'
                },
                correctAnswer: 'b'

          },
          {
            id: 5,
              question: "Which 'C' is an ornamental moulding running around the walls of a room near the ceiling?",
              answers: {
                  a: 'Cornice',
                  b: 'Crevice',
                  c: 'Corner'
                },
                correctAnswer: 'a'

          },
          {
            id: 6,
              question: "Ganymede is the largest moon of which planet?",
              answers: {
                  a: 'Jupiter',
                  b: 'Saturn',
                  c: 'Neptune'
                },
                correctAnswer: 'a'


          },
          { id: 7,
              question: "The Chinese year 2023 is represented by which animal?",
              answers: {
                  a: 'Mouse',
                  b: 'Rabbit',
                  c: 'Cat'
                },
                correctAnswer: 'b'

          },
          {
            id: 8,
              question: " Which American president became known as 'Tricky Dicky'?",
              answers: {
                  a: 'Trump',
                  b: 'Clinton',
                  c: 'Nixon'
                },
                correctAnswer: 'c'

          },
          {
            id: 9,
              question: "Which insect lives in a Formicary?",
              answers: {
                  a: 'Ant',
                  b: 'Spider',
                  c: 'Grasshopper'
                },
                correctAnswer: 'c'


          }
      
  
          

]

