// The array of questions for the game.
var questions = [
    { 
        question: "Who invented JavaScript?",
        choice: ['Elon Musk', 'Steve Jobs','Bill gates','Brendan Eich'],
        answer: 'Brendan Eich'
    }
    //add more questions here; use same format or use true or false
  ];
  
  // We start the game with a score of 0.
  // var score = 0;
  
  // Loop over every question object
  // for (var i = 0; i < questions.length; i++) {
    // Display current question to user and ask OK/Cancel
    // var answer = confirm(questions[i].question);
  
    // Compare answers
    // if (
    //   (answer === true && questions[i].answer === 't') ||
    //   (answer === false && questions[i].answer === 'f')
    // ) {
      // Increase score
      // score++;
      // Alert the user
  //     alert('Correct!');
  //   } else {
  //     alert('Wrong!');
  //   }
  // }
  
  // Show total at end
  // alert('You got ' + score + '/' + questions.length);

// add event listener to start button to initialize quiz
    // Uses querySelector to select the elements by their ids
    var startEl = document.getElementById('start');
    var questionsEl = document.getElementById('questions');
    var choicesEl = document.getElementById('question-choices');
    var timerEl = document.getElementById('timer');

    //define elements - when button is clicked the quiz function starts
    startEl.addEventListener('click', startQuiz);

//timer will begin

//questions array

//global selectors to reference your DOM elements
  //questions
  //starts button
  //choice elements
  //timer itself

//function to start the quiz
function startQuiz(){
  var startScreen = document.getElementById('start-screen-id');
  startScreen.setAttribute('style', 'display:none');
  console.log('HELLO');
}

// set attribute - uses 2 parameters