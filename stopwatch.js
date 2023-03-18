window.onload = function () {
    var miliseconds = 00
    var seconds = 00; 
    var mins = 00;
    var hrs =00 ;
    var hours = document.getElementById("hrs")
    var minutes = document.getElementById("mins")
    var secs = document.getElementById("seconds")
    var msecs = document.getElementById("miliseconds")
    var buttonStart = document.getElementById('startBtn');
    var buttonStop = document.getElementById('pauseBtn');
    var buttonReset = document.getElementById('resetBtn');
    var Interval ;
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
      hrs = "00";
      mins = "00";
      seconds = "00";
        miliseconds = "00";
      hours.innerHTML = hrs;
      minutes.innerHTML = mins;
      secs.innerHTML = seconds;
        msecs.innerHTML = miliseconds;
    }
    
     
    
    function startTimer () {
      miliseconds++; 
      
      if(miliseconds <= 9){
        msecs.innerHTML = "0" + miliseconds;
      }
      
      if (miliseconds > 9){
        msecs.innerHTML =miliseconds;
        
      } 
      
      if (miliseconds> 99) {
        console.log("seconds");
        seconds++;
        secs.innerHTML = seconds;
        miliseconds = 0;
        msecs.innerHTML = "0"+ 0;
      }
     
      if (seconds <= 9) {
        secs.innerHTML ="0" + seconds;
      }
      if (seconds >59) {
        secs.innerHTML = "0" + seconds;
      }
      
      if (seconds > 59) {
        console.log ("mins");
        mins++;
        minutes.innerHTML =  mins;
        seconds = 0;
        secs.innerHTML = "0" + 0;
      }
    
      if (mins <= 9) {
        minutes.innerHTML ="0" + mins;
      }

      if (mins > 59) {
        console.log ("hrs");
        hrs++;
        hours.innerHTML = hrs;
        mins = 0;
        hours.innerHTML = "0" + 0;

      }
    }
    
    if (hrs<= 9) {
      hours.innerHTML ="0" + hrs;
    }
  }