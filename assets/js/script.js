console.log("hello");

var timeLeft = 75;
var timer = document.getElementById("timer")


var getContainer = document.querySelector(".quizbox")

var changeQuestion = document.getElementById("question")

var answerChoices = document.createElement("ul")
var a = document.createElement("li");
var b = document.createElement("li");
var c = document.createElement("li");
var d = document.createElement("li");

// put questions in objects within an array
var allQuestions = [
      {
            question: "Commonly used data type Do Not include: ---",
            choices: {
                  a: "strings",
                  b: "alerts",
                  c: "booleans",
                  d: "numbers"
            },
            answer: "b"
      },
      {
            question: "The condition in an if/else statement is enclosed within:---",
            choices: {
                  a: "quotes",
                  b: "parentheses",
                  c: "curly brackets",
                  d: "square brackets"
            },
            answer: "b"
      },
      {
            question: "Arrays in JavaScript can be used to store:---",
            choices: {
                  a: "numbers and strings",
                  b: "other arrays",
                  c: "booleans",
                  d: "all of the above"
            },
            answer: "d"
      },
      {
            question: "String values must be enclosed within --- when being assigned to variables ",
            choices: {
                  a: "commas",
                  b: "curly brackets",
                  c: "quotes",
                  d: "parentheses"
            },
            answer: "c"
      },
      {
            question: "A very useful tool used during development and debugging for printing content to the debugger is:---",
            choices: {
                  a: "console.log",
                  b: "JavaScript",
                  c: "terminal/bash",
                  d: "alerts"
            },
            answer: "a"
      },
]

var startButton = document.getElementById("start");


function startTimer() {
      startButton.setAttribute("style", "display: none");
      var timeInterval = setInterval(function () {
            if (timeLeft > 0) {
                  timer.textContent = "Time: " + timeLeft;
            }
            else if (timeLeft === 0) {
                  timer.textContent = "Time's up!";
                  clearInterval(timeInterval);
                  // call a function that shows game over or skip to entering score page?
            }

            timeLeft--;

      }, 1000)
      showQuestions();
}

function showQuestions() {
      changeQuestion.innerHTML = allQuestions[0].question;

      getContainer.appendChild(answerChoices);
      answerChoices.appendChild(a);
      answerChoices.appendChild(b);
      answerChoices.appendChild(c);
      answerChoices.appendChild(d);

      a.textContent = allQuestions[0].choices.a;
      b.textContent = allQuestions[0].choices.b;
      c.textContent = allQuestions[0].choices.c;
      d.textContent = allQuestions[0].choices.d;
}

startButton.addEventListener("click", startTimer);

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
