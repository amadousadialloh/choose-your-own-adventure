const prompt = require("prompt-sync")();

//choose your own adventure

//Number gessing game

//Random number generator from 1 to 100
const randomNumberGenerator = () => {
  const guessNumber = Math.floor(Math.random() * 5) + 1;
  return guessNumber;
};

//Game logic
function guessingGameLogic() {
  //Ask the user to enter the number
  let guess = prompt("Guess a number between 1 and 5: ");

  guess = parseInt(guess); //convert it to number
  const random = randomNumberGenerator();
  if (guess === random) {
    console.log("Congratulations, you guessed the correct number");
  } else {
    console.log("wrong answer");
  }
}

guessingGameLogic();
