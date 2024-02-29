

function playGame(guess) {
  let randomNumber = Math.random();
  let result = randomNumber < 0.5 ? 'heads' : 'tails'
  if (guess === result) {
    console.log('You win');
  }else {
    console.log('You lose');
  }
};