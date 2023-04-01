var wordsToChoosefrom = ['cat', 'dog', 'parrot']
var secretWord =  document.querySelector(".blanks");
var startButton = document.querySelector(".start-game");

var blanks = [];

var lettersToGuess = [];

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
}

document.addEventListener("keyup", GuessTheLetter);
