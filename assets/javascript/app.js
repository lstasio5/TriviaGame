//Psuedo Code

//When user selects Start display a one minute countdown timer on the top of the screen

//Run the time until all questions have been answered

window.onload= function(){
    onTimer()
    }
    i = 60;
    console.log(onTimer)
    
    function onTimer() {
      document.getElementById('mycounter').innerHTML = i;
      i--;
      if (i < 0) {
        alert('You lose!');
      } else {
        setTimeout(onTimer, 1000);
      }
    }