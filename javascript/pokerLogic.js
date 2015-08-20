console.log('Loading script');
var time = 0;              //The main time variable - conatins total milliseconds played
var startTime = new Date();//The time when you last started the clock  
var stopTime = new Date(); //the time when you last stopped the clock
var diffTime = 0;          //the difference in time between each time the clock function is run - each time this is added to "tid"
var dispTime = 0;          //the time that will be shown
var start = false;        //Contains whether the clock is running or not

var myVar;
var temp = 60000;
var remaining=0;

function displayTheTime(time){   //converts from JS Date format(or milliseconds) to a more readeable one (HH:MM:SS)
	var d = new Date(time);
	var text = pad(d.getUTCHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
  return text;
}

function update(){						 //this function is run over and over with x ms delay - This is the core of the clock. 
  diffTime = Date.now() - startTime;		//calculate how long the clock has been running since last start
  dispTime = diffTime + time;             //calculate the stored time + the currently running time
  remaining = temp - dispTime;
  document.getElementById('time').innerHTML = displayTheTime(remaining);
}

function pad(n){return n<10 ? '0'+n : n}  //Makes 1 into 01.. used by the timer/clock


function main(){						//main() is called when Start/stop is pushed
  if (start == false){					// start == false indicates that the clock was not running
    startTime = Date.now();
    myVar = setInterval(update,500);		//starts looping the update() function with a given delay in ms.
    start = true;						//the clock is running
    console.log("Clock is running");
  }
  else{	  								//Else contains the code that's executed when the clock is paused
    clearInterval(myVar);					//Stops the update() function
  	start = false;
    time = time + diffTime;					//Adds the current time on the clock to the time variable
    console.log("Clock is not running");
  }
}

function reset(){	   //runs if the reset button is clicked
  time = 0;
  clearInterval(myVar);
  start = false;
  document.getElementById('time').innerHTML = "00:00:00";
}

window.addEventListener('load',function(){
  document.getElementById('reset').addEventListener('click',reset);
  document.getElementById('pauseStart').addEventListener('click',main);
});
console.log('script done!');