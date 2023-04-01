var wordsToChoosefrom = ['сat', 'dog', 'parrot']
var secretWord =  document.querySelector(".blanks");
var startButton = document.querySelector(".start-game");



function startTheGame() {
    var wordToGuess  = wordsToChoosefrom[Math.floor(Math.random() * wordsToChoosefrom.length)];
    var blanks = []
    for (var i = 0;i<wordToGuess.length; i++){

        blanks.push("_");
    }
    secretWord.textContent = blanks;
}


startButton.addEventListener("click", startTheGame() );