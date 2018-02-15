
var letters = ["a", "b","c"];//"d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","v","w",];

//computer picks a random word from words
var choise = letters[Math.floor(Math.random() * letters.length)];
var wins = 0;
var losses = 0;
var guessLeft = 9;
var userGuess = [];

document.onkeyup = function (event) {
  //if guess is not inside choise
  if (choise.indexOf(event.key) === -1){
    //take away one guess
    guessLeft--;
    //Push guess to user guess arrey
    userGuess.push(event.key);

  }

document.getElementById("guessLeft").textContent = guessLeft;
document.getElementById("guessed").textContent = userGuess;

}





