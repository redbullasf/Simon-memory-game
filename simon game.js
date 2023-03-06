//variables
var sequence = [];
let userSeq =[];
var whileloop = 0;
var sequenceLength = 20;
var clicks = 0;
var round =0;
var delay = 1000;
let firststart = true;



//create a random sequence of colours
for (var i = 0; i < sequenceLength; i++) {
  var colourDigit = Math.floor(Math.random() * 4) + 1;
  var currentColour = numbToColour(colourDigit);
  sequence.push(currentColour);
}console.log("The sequence: "+sequence);

//linked to start button, start the game
function startGame() {
  round++;
  
  //3sec delay
  if(firststart)
  {
    setTimeout(3000);
    firststart = false;
  }

  //if its past the 5th 9th or 13th round shorten delay 
  if (round > 5||round > 9||round > 13) {
    delay = delay - 50;
  }
  //then sta
 
  //change dot colour 
  document.getElementById("dot").style.backgroundColor = "green";

  
  //play sequence
  for (var i = 0; i < round; i++) {
    var currentColour = sequence[i];
    setTimeout(function(color) {return function() {play(color);};}(currentColour), delay * i);
  }


  //display round
  document.getElementById("counter").innerHTML = round;

  //read in user sequence
  var currentIndex = 0;
  var yellowButton = document.getElementById("yellow_button");
  var greenButton = document.getElementById("green_button");
  var blueButton = document.getElementById("blue_button");
  var redButton = document.getElementById("red_button");

  yellowButton.addEventListener("click", function() {
    console.log("Yell: "+sequence[currentIndex]);

    if (sequence[currentIndex] === "yellow_button") {
      currentIndex++;
      if (currentIndex === round) {
        // user has inputted the whole sequence correctly, move to the next round
        
        currentIndex = 0;
        setTimeout(startGame, delay); // introduce delay before starting next round
      }
    } else {
      document.getElementById("highscore").innerHTML = round;
      endgame(round);
    }
  });

  greenButton.addEventListener("click", function() {
    console.log("gre: "+sequence[currentIndex]);
    if (sequence[currentIndex] === "green_button") {
      currentIndex++;
      if (currentIndex === round) {
        // user has inputted the whole sequence correctly, move to the next round
        
        currentIndex = 0;
        setTimeout(startGame, delay); // introduce delay before starting next round
      }
    } else {
      document.getElementById("highscore").innerHTML = round;
      endgame(round);
    }
  });

  blueButton.addEventListener("click", function() {
    if (sequence[currentIndex] === "blue_button") {
      currentIndex++;
      if (currentIndex === round) {
        // user has inputted the whole sequence correctly, move to the next round
        
        currentIndex = 0;
        setTimeout(startGame, delay); // introduce delay before starting next round
      }
    } else {
      document.getElementById("highscore").innerHTML = round;
      endgame(round);
    }
  });

  redButton.addEventListener("click", function() {
    if (sequence[currentIndex] === "red_button") {
      currentIndex++;
      if (currentIndex === round) {
        // user has inputted the whole sequence correctly, move to the next round
        
        currentIndex = 0;
        setTimeout(startGame, delay); // introduce delay before starting next round
      }
    } else {
      document.getElementById("highscore").innerHTML = round;
      endgame(round);
    }
  });

  
}

//calls the flash function

function play(currentColour) {

  var button = document.getElementById(currentColour);
  flashColour(button); 
  
      
}

//change a given number to a colour 
function numbToColour(colour) {   
    if(colour == 1)
    {
    return("yellow_button");               
    }
    else if(colour == 2)
    {
        return("green_button");               
    }
    else if(colour == 3)
    {
        return("blue_button");      
    }
    else if(colour == 4)
    {
        return("red_button");               
    }   
}
//flash a colour by changing colour to while and back to normal
function flashColour(button) {
    setTimeout(function() {button.style.backgroundColor = "white";}, delay*1/2);
    setTimeout(function() {button.style.backgroundColor = "";}, delay);
}


function endgame(round)
{
  
  //when you lose flash five times
  for(let i=0;i<5;i++)
  {
    setTimeout(function() {return function() {play("red_button");};}(currentColour), delay * i);
    setTimeout(function() {return function() {play("green_button");};}(currentColour), delay * i);
    setTimeout(function() {return function() {play("yellow_button");};}(currentColour), delay * i);
    setTimeout(function() {return function() {play("blue_button");};}(currentColour), delay * i);
  }
  //display the highest round
  let curr = document.getElementById("highscore").innerHTML;
  if(round>curr)
  {
    document.getElementById("highscore").innerHTML = round;
  }
  
  document.getElementById("counter").innerHTML = 0;
  round = 0;
  //turn the dot to red 
  document.getElementById("dot").style.backgroundColor = "red";
  

}