console.log("hello");

var timeLeft = 75;
var timer = document.getElementById("timer")


var getContainer = document.querySelector(".quizbox")

var changeQuestion = document.getElementById("question")

var answerChoices = document.createElement("ul")
var a = document.createElement("button");
var b = document.createElement("button");
var c = document.createElement("button");
var d = document.createElement("button");

var initialsLabel = document.createElement("label");
var initialsTextBox = document.createElement("input");

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
            question: "The condition in an if/else statement is enclosed within: ---",
            choices: {
                  a: "quotes",
                  b: "parentheses",
                  c: "curly brackets",
                  d: "square brackets"
            },
            answer: "b"
      },
      {
            question: "Arrays in JavaScript can be used to store: ---",
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
            question: "A very useful tool used during development and debugging for printing content to the debugger is: ---",
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


function startTimer(event) {
      event.preventDefault();
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
      firstQuestion();
}

function firstQuestion() {
      changeQuestion.textContent = allQuestions[0].question;

      getContainer.appendChild(answerChoices);
      answerChoices.appendChild(a);
      answerChoices.appendChild(b);
      answerChoices.appendChild(c);
      answerChoices.appendChild(d);

      a.textContent = allQuestions[0].choices.a;
      b.textContent = allQuestions[0].choices.b;
      c.textContent = allQuestions[0].choices.c;
      d.textContent = allQuestions[0].choices.d;

      a.addEventListener("click", secondQuestion);
      b.addEventListener("click", secondQuestion);
      c.addEventListener("click", secondQuestion);
      d.addEventListener("click", secondQuestion);
}

function secondQuestion() {
      changeQuestion.textContent = allQuestions[1].question;

      getContainer.appendChild(answerChoices);
      answerChoices.appendChild(a);
      answerChoices.appendChild(b);
      answerChoices.appendChild(c);
      answerChoices.appendChild(d);

      a.textContent = allQuestions[1].choices.a;
      b.textContent = allQuestions[1].choices.b;
      c.textContent = allQuestions[1].choices.c;
      d.textContent = allQuestions[1].choices.d;

      a.addEventListener("click", thirdQuestion);
      b.addEventListener("click", thirdQuestion);
      c.addEventListener("click", thirdQuestion);
      d.addEventListener("click", thirdQuestion);
}

function thirdQuestion() {
      changeQuestion.textContent = allQuestions[2].question;

      getContainer.appendChild(answerChoices);
      answerChoices.appendChild(a);
      answerChoices.appendChild(b);
      answerChoices.appendChild(c);
      answerChoices.appendChild(d);

      a.textContent = allQuestions[2].choices.a;
      b.textContent = allQuestions[2].choices.b;
      c.textContent = allQuestions[2].choices.c;
      d.textContent = allQuestions[2].choices.d;

      a.addEventListener("click", fourthQuestion);
      b.addEventListener("click", fourthQuestion);
      c.addEventListener("click", fourthQuestion);
      d.addEventListener("click", fourthQuestion);
}

function fourthQuestion() {
      changeQuestion.textContent = allQuestions[3].question;

      getContainer.appendChild(answerChoices);
      answerChoices.appendChild(a);
      answerChoices.appendChild(b);
      answerChoices.appendChild(c);
      answerChoices.appendChild(d);

      a.textContent = allQuestions[3].choices.a;
      b.textContent = allQuestions[3].choices.b;
      c.textContent = allQuestions[3].choices.c;
      d.textContent = allQuestions[3].choices.d;

      a.addEventListener("click", fifthQuestion)
      b.addEventListener("click", fifthQuestion)
      c.addEventListener("click", fifthQuestion)
      d.addEventListener("click", fifthQuestion)
}

function fifthQuestion() {
      changeQuestion.textContent = allQuestions[4].question;

      getContainer.appendChild(answerChoices);
      answerChoices.appendChild(a);
      answerChoices.appendChild(b);
      answerChoices.appendChild(c);
      answerChoices.appendChild(d);

      a.textContent = allQuestions[4].choices.a;
      b.textContent = allQuestions[4].choices.b;
      c.textContent = allQuestions[4].choices.c;
      d.textContent = allQuestions[4].choices.d;

      a.addEventListener("click", endOfGame)
      b.addEventListener("click", endOfGame)
      c.addEventListener("click", endOfGame)
      d.addEventListener("click", endOfGame)
}

function endOfGame() {
      changeQuestion.textContent = "All Done! Your final score is " + timeLeft + ".";

      answerChoices.setAttribute("style", "display: none;");

      initialsLabel.textContent = "Enter initials:"


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
