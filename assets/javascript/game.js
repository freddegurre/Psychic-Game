
var letters = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","v","w",];

//computer picks a random word from words
var choise = letters[Math.floor(Math.random() * letters.length)];
var wins = 0;
var losses = 0;
var guessLeft = 9;
var userGuess = [];
var wrongGuess = [];

function newGame() {
  choise = letters[Math.floor(Math.random() * letters.length)];
}

document.onkeyup = function (event) { 
      //if guess is not inside choise
      if (choise.indexOf(event.key) === -1){
          //take away one guess
          guessLeft--;
          //Push guess to user guess arrey
          userGuess.push(event.key);
      }
      //if guess is inside choise
      if (choise.indexOf(event.key) >= 0 ) {
        wins++;
        wrongGuess = [];
        guessLeft = 9;
        newGame()
      }
      
      else{
        wrongGuess.push(event.key);
      } 

      if (guessLeft === 0){
        alert("game over")
        wrongGuess = [];
        losses++
        guessLeft = 9;
        newGame()
      }


    document.getElementById("guessLeft").textContent = guessLeft;
    document.getElementById("guessed").textContent = wrongGuess;
    document.getElementById("wins").textContent = wins;
    document.getElementById("loss").textContent = losses;
}





