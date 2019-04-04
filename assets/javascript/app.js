// My trivia questions
var questions = [
  {
    question: "The hawaiian Islands used to be known as the Cook Islands",
    answers: ["True", "False"],
    correctAnswer: "True"
  },
  {
    question: "Kauai is the largest of the Hawaiian islands",
    answers: ["True", "False"],
    correctAnswer: "False"
  },
  {
    question: "Hawaii is known for it's great skiing",
    answers: ["True", "False"],
    correctAnswer: "False"
  },
];

//function to start timer and show questions

$(document).ready(function(){
  $("button").click(function(){
    onTimer();

    $("#start").remove();

    // need to convert to loop
    $("#card").html(`
      <h2>${questions[0].question}</h2>
      <input type='radio' name='question1' value=${questions[0].answers[0]}>true
      <input type='radio' name='question1' value=${questions[0].answers[1]}>false
      <h2>${questions[1].question}</h2>
      <input type='radio' name='question2' value=${questions[0].answers[0]}>true
      <input type='radio' name='question2' value=${questions[0].answers[1]}>false
      <h2>${questions[2].question}</h2>
      <input type='radio' name='question3' value=${questions[0].answers[0]}>true
      <input type='radio' name='question3' value=${questions[0].answers[1]}>false
    `)

  });
});

 
var i = 60;
console.log(onTimer)

function onTimer() {
  document.getElementById('my-counter').innerHTML = i;
  i--;
  if (i < 0) {
    alert('Sorry, time is up!');
  } else {
      setTimeout(onTimer, 1000);
    }
  }

  //Pseudo code

  // If all answers for each question is correct and time is greater than 0 
  // then user wins

  // If all answers for each question are not correct and time is
  //less than zero than user loses

