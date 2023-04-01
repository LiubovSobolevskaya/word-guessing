var wordsToChoosefrom = ['cat', 'dog', 'parrot'];
var secretWord =  document.querySelector(".blanks");
var startButton = document.querySelector(".start-game");
var setTimer = document.querySelector("#seconds");
var secondsLeft = 15;
var totalWins = 0;
var totalLoses = 0;
var champion = false;
var timerInterval;
var blanks = [];

var lettersToGuess = [];

function setTime() {
      timerInterval= setInterval(function() {
      secondsLeft--;
      setTimer.textContent = secondsLeft;
      console.log(secondsLeft === 0);
      if(secondsLeft === 0){
        secretWord.textContent = "You Lost!";
        clearInterval(timerInterval);
        totalLosses++;
      }
    }, 1000);
  }


function startTheGame() {
    blanks = [];
    lettersToGuess = [];
    secretWord.textContent = ""
    var wordToGuess  = wordsToChoosefrom[Math.floor(Math.random() * wordsToChoosefrom.length)];
    console.log(wordToGuess)
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
    console.log(lettersToGuess);
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
      if (lettersToGuess[i] !== blanks[i]) {
        champion = false;
      }
    } 
    console.log(champion);
    if (secondsLeft > 0 && champion){
      console.log(champion &&  secondsLeft > 0);
        secretWord.textContent = "You Won!";
        clearInterval(timerInterval);
        totalWins++;
        
    }
}

document.addEventListener("keyup", GuessTheLetter);

// To do: 
// 1. check if the person won and create a conditional statement for that. (Print: You Win!)
// 2. create a tally of how many wins and losses. 
