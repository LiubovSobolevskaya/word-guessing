var wordsToChoosefrom = ['cat', 'dog', 'parrot', 'elephant', 'horse', 'duck', 'rhino'];
var secretWord =  document.querySelector(".blanks");
var startButton = document.querySelector(".start-game");
var resetButton = document.querySelector(".reset");
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
      clearInterval(timerInterval);
      timerInterval= setInterval(function() {
      secondsLeft--;
      setTimer.textContent = secondsLeft;
      
      if(secondsLeft === 0){
        secretWord.textContent = "You Lost!";
        gameStarted = false;
        champion = false;
        clearInterval(timerInterval);
        totalLosses++; 
        blanks = [];
        lettersToGuess = [];
        localStorage.setItem("losses", totalLosses);
        lossCount.textContent = totalLosses;
        startButton.disabled = false;
        
      }
      if (secondsLeft > 0 && champion){
        gameStarted = false;
        champion = false;
        secretWord.textContent = "You Won!";
        clearInterval(timerInterval);
        totalWins++;
        blanks = [];
        lettersToGuess = [];
        localStorage.setItem("wins", totalWins);
        winCount.textContent = totalWins;
        startButton.disabled = false;
        
        
    }
    }, 1000);
  }

function setWinsLosses() {

    var SavedWins = localStorage.getItem("wins");
    var SavedLosses = localStorage.getItem("losses");
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
    startButton.disabled = true;
    gameStarted = true;
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
    setTimer.textContent = secondsLeft;
    setTime();
}

startButton.addEventListener("click", startTheGame );

resetButton.addEventListener("click", resetButtonPress );



function resetButtonPress() {
  localStorage.setItem("losses", 0);
  localStorage.setItem("wins", 0);
  winCount.textContent = 0;
  lossCount.textContent = 0;
}



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
    if (lettersToGuess.length === 0){
      champion = false;
    }
    else{
      for (var i = 0; i < lettersToGuess.length; i++) {
        if (lettersToGuess[i] !== blanks[i]) {
          champion = false;
        }
      }
    } 

}

document.addEventListener("keyup", GuessTheLetter);

// To do: 
// 1. check if the person won and create a conditional statement for that. (Print: You Win!)
// 2. create a tally of how many wins and losses. 
