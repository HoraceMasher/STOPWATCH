//load javascript into HTML page
// declare the global variables
window.onload = function () {
    let miliseconds = 00;
    let seconds = 00; 
    let mins = 00;
    let hrs =00 ;

    //get elements from HTML page to apply javscript responsiveness
    let hours = document.getElementById("hrs")
    let minutes = document.getElementById("mins")
    let secs = document.getElementById("seconds")
    let msecs = document.getElementById("miliseconds")
    let buttonStart = document.getElementById('startBtn');
    let buttonStop = document.getElementById('pauseBtn');
    let buttonReset = document.getElementById('resetBtn');

  //start timer.
    let Interval ;
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    } // continuosly updates the watch

    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    } //stops clock onclicking the pause button
    
  
    //reseting stopwtch
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
  
     
    //increments a microsecond on clicking the start button
    function startTimer () {
      miliseconds++; 
      
      if(miliseconds <= 9){
        msecs.innerHTML = "0" + miliseconds;
      } // shows a doubble digit with a leading zero if the number is less than nine
      
      if (miliseconds > 9){
        msecs.innerHTML =miliseconds;
        
      } 
      
      if (miliseconds> 99) {
        console.log("seconds");
        seconds++; // increments a second 
        secs.innerHTML = seconds;
        miliseconds = 0;
        msecs.innerHTML =  0;
      }
     
      if (seconds <= 9) {
        secs.innerHTML ="0" + seconds;
      }
      if (seconds >59) {
        secs.innerHTML =  seconds;
      }
      
      if (seconds > 59) {
        console.log ("mins");
        mins++; // increments a minute aftr 59 seconds
        minutes.innerHTML =  mins;
        seconds = 0;
        secs.innerHTML =  0;
      }
    
      if (mins <= 9) {
        minutes.innerHTML = "0" + mins;
      }

      if (mins > 59) {
        console.log ("hrs");
        hrs++; // increments an hour after 59 minutes
        hours.innerHTML = hrs;
        mins = 0;
        hours.innerHTML =  0;

      }
    }
    
    if (hrs<= 9) {
      hours.innerHTML ="0" + hrs;
    }
  }