console.log("hello");

var timeLeft = 75;
var timer = document.getElementById("timer")
var startButton = document.getElementById("start");
var getContainer = document.querySelector(".quizbox")
var changeQuestion = document.getElementById("question")

// makes list of answer choices and buttons for each answer choice
var answerChoices = document.createElement("ul")
var a = document.createElement("button");
var b = document.createElement("button");
var c = document.createElement("button");
var d = document.createElement("button");

// making buttons correspond to 'answer' in each object in the array
a.setAttribute("class", "a");
b.setAttribute("class", "b");
c.setAttribute("class", "c");
d.setAttribute("class", "d");

// for the end of game page where user submits initials
var endOfGameForm = document.createElement("form");
var initialsLabel = document.createElement("label");
var initialsTextBox = document.createElement("input");
var submitButton = document.createElement("button")

submitButton.id = "submit"

// to show all saved scores
var savedScoreList = document.createElement("ol");
var savedScores = document.createElement("li");

// put questions in objects within an array
var allQuestions = [{
      question: "Commonly used data types DO NOT include _____.",
      choices: {
            a: "strings",
            b: "alerts",
            c: "booleans",
            d: "numbers"
      },
      answer: "b"
},
{
      question: "The condition in an if/else statement is enclosed within _____.",
      choices: {
            a: "quotes",
            b: "parentheses",
            c: "curly brackets",
            d: "square brackets"
      },
      answer: "b"
},
{
      question: "Arrays in JavaScript can be used to store _____.",
      choices: {
            a: "numbers and strings",
            b: "other arrays",
            c: "booleans",
            d: "all of the above"
      },
      answer: "d"
},
{
      question: "String values must be enclosed within _____ when being assigned to variables ",
      choices: {
            a: "commas",
            b: "curly brackets",
            c: "quotes",
            d: "parentheses"
      },
      answer: "c"
},
{
      question: "A very useful tool used during development and debugging for printing content to the debugger is _____.",
      choices: {
            a: "console.log",
            b: "JavaScript",
            c: "terminal/bash",
            d: "alerts"
      },
      answer: "a"
},
]


function startTimer(event) {
      event.preventDefault();
      startButton.setAttribute("style", "display: none");

      var timeInterval = setInterval(function () {
            if (timeLeft > 0) {
                  timer.textContent = "Time: " + timeLeft;
            } else if (timeLeft === 0) {
                  timer.textContent = "Time's up!";
                  clearInterval(timeInterval);
                  endOfGame();
            }

            timeLeft--;

      }, 1000)
      firstQuestion();
}

function firstQuestion(event) {
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



function secondQuestion(event) {
      a.removeEventListener("click", secondQuestion);
      b.removeEventListener("click", secondQuestion);
      c.removeEventListener("click", secondQuestion);
      d.removeEventListener("click", secondQuestion);

      // this group of lines in each function refer to the previous question
      chosenAnswer1 = event.target.getAttribute("class");
      rightAnswer1 = allQuestions[0].answer;

      if (chosenAnswer1 === rightAnswer1) {
            alert("You are correct!");
      } else {
            timeLeft -= 10;
            alert("You are incorrect.");
      }
      // end of 

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

function thirdQuestion(event) {

      a.removeEventListener("click", thirdQuestion);
      b.removeEventListener("click", thirdQuestion);
      c.removeEventListener("click", thirdQuestion);
      d.removeEventListener("click", thirdQuestion);

      chosenAnswer2 = event.target.getAttribute("class");
      rightAnswer2 = allQuestions[1].answer;


      if (chosenAnswer2 === rightAnswer2) {
            alert("You are correct!");
      } else {
            timeLeft -= 10;
            alert("You are incorrect.");
      }

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

function fourthQuestion(event) {
      a.removeEventListener("click", fourthQuestion);
      b.removeEventListener("click", fourthQuestion);
      c.removeEventListener("click", fourthQuestion);
      d.removeEventListener("click", fourthQuestion);


      chosenAnswer3 = event.target.getAttribute("class");
      rightAnswer3 = allQuestions[2].answer;

      if (chosenAnswer3 === rightAnswer3) {
            alert("You are correct!");
      } else {
            timeLeft -= 10;
            alert("You are incorrect.");
      }


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

      a.addEventListener("click", fifthQuestion);
      b.addEventListener("click", fifthQuestion);
      c.addEventListener("click", fifthQuestion);
      d.addEventListener("click", fifthQuestion);
}

function fifthQuestion(event) {

      a.removeEventListener("click", fifthQuestion);
      b.removeEventListener("click", fifthQuestion);
      c.removeEventListener("click", fifthQuestion);
      d.removeEventListener("click", fifthQuestion);


      chosenAnswer4 = event.target.getAttribute("class");
      rightAnswer4 = allQuestions[3].answer;


      if (chosenAnswer4 === rightAnswer4) {
            alert("You are correct!");
      } else {
            timeLeft -= 10;
            alert("You are incorrect.");
      }


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

      a.addEventListener("click", endOfGame);
      b.addEventListener("click", endOfGame);
      c.addEventListener("click", endOfGame);
      d.addEventListener("click", endOfGame);
}

function endOfGame(event) {

      chosenAnswer5 = event.target.getAttribute("class");
      rightAnswer5 = allQuestions[4].answer;

      if (chosenAnswer5 === rightAnswer5) {
            alert("You are correct!");
      } else {
            timeLeft -= 10;
            alert("You are incorrect.");
      }

      timer.setAttribute("style", "display: none");
      changeQuestion.textContent = "All Done! Your final score is " + timeLeft + ".";

      answerChoices.setAttribute("style", "display: none;");

      getContainer.appendChild(endOfGameForm);
      endOfGameForm.appendChild(initialsLabel);
      endOfGameForm.appendChild(initialsTextBox);
      endOfGameForm.appendChild(submitButton);

      initialsLabel.textContent = "Enter your initials: ";
      submitButton.textContent = "Submit";



}

submitButton.addEventListener("click", function (event) {
      event.preventDefault();
      changeQuestion.textContent = "Highschores";

      getContainer.appendChild(savedScoreList);
      savedScoreList.appendChild(savedScores);

      var userInitials = document.querySelector("#submit").value;


      localStorage.setItem("initials", userInitials);
      localStorage.setItem("score", timeLeft);
})

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
