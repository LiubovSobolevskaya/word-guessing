var wordsToChoosefrom = ['сat', 'dog', 'parrot']
var secretWord =  document.querySelector(".blanks");
var startButton = document.querySelector(".start-game");



function startTheGame() {
    var wordToGuess  = wordsToChoosefrom[Math.floor(Math.random() * wordsToChoosefrom.length)];
    console.log(wordToGuess)
    var lettersToGuess = wordToGuess.split("");
    var blanks = []
    for (var i = 0;i<lettersToGuess.length; i++){

        blanks.push("_");
    }
    secretWord.textContent = blanks;
}

startButton.addEventListener("click", startTheGame );