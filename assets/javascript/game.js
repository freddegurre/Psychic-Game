
var letters = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","v","w",];

//computer picks a random word from words
var choise = letters[Math.floor(Math.random() * letters.length)];
//Store number of wins
var wins = 0;
//Store number of losses 
var losses = 0;
//How many guesses does user have left before game over
var guessLeft = 9;
//store al wrong guesses
var wrongGuess = [];
//Store the sounds that start when first key is pressed
var audio = new Audio('captainplanet24.mp3');

// Function that starts new game
function newGame() {
  //Pick new lettter 
  choise = letters[Math.floor(Math.random() * letters.length)]; 
  //Set wrong guess to 0
  wrongGuess = []; 
  //get 9 lifes 
  guessLeft = 9;
}


//When key is pressed start game
document.onkeyup = function (event) {  

  //Start play sound when game is started. 
  audio.play();

      //If the pressed key is not the chosen word..
      if (choise.indexOf(event.key) === -1){
          
        //take away one guess
          guessLeft--;
          
        //Push the letter to array of guessed letters
         wrongGuess.push(event.key);
         
      }
      
      // guessed letter is inside choise
      else if (choise.indexOf(event.key) >= 0 ) {
        
        //add to wins
        wins++;
        //Tell user they are right 
        alert("whoohoo you won!")
        //start new game
        newGame();
      }
      
      // to know game over iff guessleft = 0 
      if (guessLeft === 0){
        //then allert user game over 
        alert("game over")
        //add 1 to losses 
        losses++
        //start new game
        newGame();
      }


    document.getElementById("guessLeft").textContent = guessLeft;
    document.getElementById("guessed").textContent = wrongGuess;
    document.getElementById("wins").textContent = wins;
    document.getElementById("loss").textContent = losses;
}





