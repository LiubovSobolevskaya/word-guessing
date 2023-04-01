var wordsToChoosefrom = ['cat', 'dog', 'parrot'];
var secretWord =  document.querySelector(".blanks");
var startButton = document.querySelector(".start-game");
var setTimer = document.querySelector("#seconds");
var secondsLeft = 15;
var totalWins = 0;
var totalLosses = 0;
var champion = false;
var timerInterval;
var blanks = [];
var winCount = document.querySelector(".win");
var lossCount = document.querySelector(".lose");
var gameStarted = false;

var lettersToGuess = [];

function setTime() {
      timerInterval= setInterval(function() {
      secondsLeft--;
      setTimer.textContent = secondsLeft;
      
      if(secondsLeft === 0){
        secretWord.textContent = "You Lost!";
        clearInterval(timerInterval);
        totalLosses++; 
        localStorage.setItem("loses", totalLosses);
        lossCount.textContent = totalLosses;
      }
    }, 1000);
  }

function setWinsLosses() {

    var SavedWins = localStorage.getItem("wins");
    var SavedLosses = localStorage.getItem("loses");
    if (SavedWins !== null) {
      winCount.textContent = SavedWins;
      totalWins =  SavedWins;
    } else {
      winCount.textContent = 0;
      totalWins = 0;
    }
    
    if (SavedLosses !== null) {
      lossCount.textContent = SavedLosses;
      totalLosses = SavedLosses;
    } else {
      lossCount.textContent = 0;
      totalLosses = 0;
    }
}


setWinsLosses();

function startTheGame() {
    gameStarted = true;
    blanks = [];
    lettersToGuess = [];
    secretWord.textContent = ""
    var wordToGuess  = wordsToChoosefrom[Math.floor(Math.random() * wordsToChoosefrom.length)];

    lettersToGuess = wordToGuess.split("");
    
    var display = "";
    for (var i = 0;i<lettersToGuess.length; i++){
        blanks.push("_");
        display += "_ ";
    }
    secretWord.textContent = display;
    secondsLeft = 15;
    setTime();
}

startButton.addEventListener("click", startTheGame );


function GuessTheLetter(event){

    var keyPress = event.key;
    if (lettersToGuess.includes(keyPress))
    {
        for (var i = 0; i < lettersToGuess.length; i++) {
            if ( lettersToGuess[i] ===  keyPress) {
                blanks[i] = keyPress;
              }
        }
        var display = "";
        for (var i = 0;i<lettersToGuess.length; i++){
            display +=  blanks[i] + " ";
        }
        secretWord.textContent = display;
    
    }
    champion = true;
    for (var i = 0; i < lettersToGuess.length; i++) {
      if (lettersToGuess.length === 0){
        champion = false;
      }
      else{
        if (lettersToGuess[i] !== blanks[i]) {
          champion = false;
        }
      }
    } 

    if (secondsLeft > 0 && champion && gameStarted){
        secretWord.textContent = "You Won!";
        clearInterval(timerInterval);
        totalWins++;
        localStorage.setItem("wins", totalWins);
        winCount.textContent = totalWins;
        
    }
}

document.addEventListener("keyup", GuessTheLetter);

// To do: 
// 1. check if the person won and create a conditional statement for that. (Print: You Win!)
// 2. create a tally of how many wins and losses. 
