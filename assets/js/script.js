console.log("hello");

var timeLeft = 75;
var timer = document.getElementById("timer")


var changeQuestionNum = document.getElementById("question-number")

var changeQuestion = document.getElementById("question")

// put questions in objects within an array
var questions = [
      {
            q: "Commonly used data type Do Not include:---",
            choices: ["strings", "booleance", "alerts", "numbers"],
            answer: "alerts"
      },
      {
            q: "The condition in an if/else statement is enclosed within:---",
            choices: ["quotes", "Curly brackets", "parentheses", "square brackets"],
            answer: "parentheses"
      },
      {
            q: "Arrays in JavaScript can be used to store:---",
            choices: ["numbers and strings", "other Arrays", "booleances", "all of the above"],
            answer: "all of the above"
      },
      {
            q: "String values must be enclosed within --- when being assigned to variables ",
            choices: ["commas", "curly brackets", "quotes", "parentheses"],
            answer: "quotes"
      },
      {
            q: "A very useful tool used during development and debugging for printing content to the debugger is:---",
            choices: ["JavaScript", "terminal/bash", "alerts", "console.log"],
            answer: "console.log"
      },
]

var startButton = document.getElementById("start");

startButton.addEventListener("click", function () {
      var timeInterval = setInterval(function () {
            if (timeLeft > 0) {
                  timer.textContent = "Time: " + timeLeft;
            }
            else if (timeLeft === 0) {
                  timer.textContent = "Time: " + timeLeft;
                  clearInterval(timeInterval);
                  // call a function that shows game over or skip to entering score page?
            }

            timeLeft--;
      }, 1000)
});





// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
