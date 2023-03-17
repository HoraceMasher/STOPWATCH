//start stopwatch
// initialise the global variables
let count = 0;
let clearTime = 0;
let miliSeconds= 0;
let seconds = 0 ;
let minutes = 0 ;
let hours = 0 ;
var clearState;
let miliSecs,secs,mins, getHours; function startWatch(){
    if (miliSeconds===999) {
        miliSeconds= 0 ;seconds = seconds +1 ;
    }
    if ( seconds===59) {
        seconds = 0 ; minutes= minutes +1 ;
    }
    if ( minutes===59) {
        minutes = 0 ;hours = hours =1 ;
    }

    //change HTML page
let x= document.getElementById("time_Display") ; x.innerHTML = 'time: ' + getHours + mins + seconds +miliSeconds;
seconds++ ;
clearTime = setTimeout ( "startWatch()" ,1000 ) 

}
// start stopwatch funvtion
function startTime (){
    if ( miliSeconds===0 && seconds===0 && minutes ===0 && hours===0)
    startWatch() ;
} 

// set events to keep stopwatch live.
let startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", startTime);

//pausewatch
function pauseTime () {
    if( miliSeconds!=0 || seconds!=0 || minutes!=0 || hours!=0);
}

//display time before reseting
let showTime = document.getElementById ("showTime");
showTime.style.display = "block";
let time = getHours + mins + secs + miliSecs ;
showTime.innerHTML = "time: ";

// reset stopwatch
miliSeconds = 0;
seconds = 0;
minutes= 0;
hours= 0;

miliSecs = 0 + miliSeconds;
secs = 0 + seconds +':';
mins = 0 + minutes + ':';
hours = 0 + getHours + ':';

//display stopwatch after it has been paused

let x = document.getElementById ("showTime");
let stopTime = getHours +minutes + seconds +miliSeconds ;
x.innerHTML= stopTime;

//display control buttons
let showStart = document.getElementById ("statBtn")
showStart.style.display = "inline-Block"