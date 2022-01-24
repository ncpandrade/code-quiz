// questions --------------
var questions = [
    { 
        question: 'Which is incorrect? Commonly used data types include:',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer:  'alerts'
    },
    {
        question: 'The condition in an if/else statement is enclosed with____________.',
        choices: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        answer: 'parenthesis'
    },
    {
        question: 'Arrays in JavaScript can be used to store ____________.',
        choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above'
    },
    {    
        question: 'String values must be enclosed within__________ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
        answer: 'quotes'
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
        answer: 'console.log'
    },
  ];

  // Create a variable each question 18 sec * 5 questions total (90sec time) and 10 sec penalty for wrong answer----------------
var score = 0;
var questionIndex = 0;
var secondsLeft = questions.length * 18;
var holdInterval = 0;
var penalty = 10;
var hideResponseTimeout = null;
// var elements --------------
var elements = {
    startQuiz: document.querySelector("#playGame"),
    wrapper: document.querySelector("#cover"),
    question: document.querySelector("#content"),
    questionChoice: document.querySelector("#Option"),
    intro: document.querySelector("#preface"),
    questionTitle: document.querySelector("#Tag"),
    correct: document.querySelector("#true"),
    wrong: document.querySelector("#false"),
    currentTime: document.querySelector("#presentPeriod"),
    viewHighScores: document.querySelector("#viewScore"),
    initials: document.querySelector("#signature"),
    submitInitials: document.querySelector("#giveIn"),
    inputInitials: document.querySelector("#mark"),
    timer: document.querySelector("#startTime"),
    scores: document.querySelector("#rates"),
    highScore: document.querySelector("#text"),
    clear: document.querySelector("#erase"),
    goBack: document.querySelector("#startOver"),
    finalScore: document.querySelector("#result"),
 };

 // functions to present wrapper document---------------
function showWrapperElement(element) {
    var children = elements.wrapper.children;
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        hideElement(child);
    }
    showElement(elements.wrapper);
    if (!element) {
        return;
    }
    showElement(element);
}

function showElement(element) {
    element.style.display = "";
}

function hideElement(element) {
    element.style.display = "none";
}
// function to start the timer and quiz-----------------
function startQuiz() {
    startTimer();
    showQuizItem(0);
    
}

function hideResponse () {
    hideElement(elements.correct);
    hideElement(elements.wrong);
}
// questions content------------------
function showQuizItem(number) {
    showWrapperElement();
    var delay = number? 2000:0;
    hideResponseTimeout = setTimeout(hideResponse, delay);
    var question = questions[number];
    elements.questionTitle.innerHTML = question.question;
    showChoices(number);
    showWrapperElement(elements.question);
}
// questions options-------------------
function showChoices(number) {
    var choices = questions[number].choices;
    removeAllChildNodes(elements.questionChoice);
    choices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        elements.questionChoice.appendChild(listItem);
        listItem.addEventListener("click", onChoice);
    })
};
// remove child node in the memory------------
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// triggers when time is over 
 function startTimer() {
    if (holdInterval) {
        return
    }  
    elements.currentTime.textContent = secondsLeft;
    holdInterval = setInterval(function() {
        secondsLeft--;
        elements.currentTime.textContent = secondsLeft;
    
        if (secondsLeft <= 0) {
            finishQuiz();
            elements.currentTime.textContent = "Time is up!";
        }

    }, 1000);
};

// the choices & correct answer comparison-------------------
function onChoice(event) {
    clearTimeout(hideResponseTimeout);
    hideResponse();
    var element = event.target;

    if (element.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");

        if (element.textContent == questions[questionIndex].answer) {
            score++;
            showElement(elements.correct);

        } else {
            secondsLeft = secondsLeft - penalty;
            showElement(elements.wrong);
        }
    }
    questionIndex++;
    if (questionIndex >= questions.length) {
        finishQuiz();
    } else {
        showQuizItem(questionIndex);
    }
}

function finishQuiz() {
   
    //  remaining time & score---------------------
    if (secondsLeft < 0) {
        secondsLeft = 0;
    }
        clearInterval(holdInterval);
        elements.finalScore.textContent = secondsLeft;
   
    showWrapperElement(elements.initials);
}

function showScores() {
    var scores = getAllScores();
    removeAllChildNodes(elements.highScore);
    scores.forEach(function (score) {
        var listItem = document.createElement("li");
        listItem.textContent = `${score.initials} - ${score.score}`;
        elements.highScore.appendChild(listItem);
    })
    showWrapperElement(elements.scores);
}

function getAllScores() {
    var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
    return allScores;
}
    
    // localstorage sign and score collection-------------------
    function onInitialsEntered() {
        var initials = elements.inputInitials.value;

        if (!initials) {
            alert("No value entered!");
            return
        }  
        var finalScore = {
            initials: initials,
            score: secondsLeft
        }
        var allScores = getAllScores();
        
        allScores.push(finalScore);
        var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);
        showScores()

}

//  localstorage clear ---------------------
elements.submitInitials.addEventListener("click", onInitialsEntered);
erase.addEventListener("click", function() {
    //  clear----------------------
    localStorage.clear();
    showScores();
});
// result, time  function-----------------
elements.goBack.addEventListener("click", function () {
     score = 0;
     questionIndex = 0;
     secondsLeft = questions.length * 18;
     holdInterval = 0;
     elements.currentTime.textContent = "";
     elements.inputInitials.value = "";
    showWrapperElement(elements.intro);
    
});
// run--------------------------
elements.viewHighScores.addEventListener("click", showScores);

showWrapperElement(elements.intro);
elements.startQuiz.addEventListener("click", startQuiz);