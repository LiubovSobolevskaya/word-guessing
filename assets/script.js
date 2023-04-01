var wordsToChoosefrom = ['сat', 'dog', 'parrot']
var secretWord =  document.querySelector(".blanks");
var startButton = document.querySelector(".start-game");

var lettersToGuess = [];
function startTheGame() {
    secretWord.textContent = ""
    var wordToGuess  = wordsToChoosefrom[Math.floor(Math.random() * wordsToChoosefrom.length)];
    console.log(wordToGuess)
    lettersToGuess = wordToGuess.split("");
    var blanks = "";
    for (var i = 0;i<lettersToGuess.length; i++){
        blanks += "_ ";
    }
    secretWord.textContent = blanks;
}

startButton.addEventListener("click", startTheGame );


function GuessTheLetter(event){
    var keyPress = event.key;


}

document.addEventListener("keyup", GuessTheLetter);