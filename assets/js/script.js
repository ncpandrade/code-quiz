// The array of questions for the game.
var questions = [
    { 
        question: "Who invented JavaScript?",
        choice: ['Elon Musk', 'Steve Jobs','Bill Gates','Brendan Eich'],
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
    //define timer start
    timerEl.addEventListener('click', countdown)

//timer will begin
// Timer that counts down from 60
function countdown() {
  var timeLeft = 60;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
    }
  }, 1000);
}
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
  questionsEl.textContent = questions[0];
}
