const score = {
  wins:0 ,
  losses:0 ,
}

function playGame(guess) {
  let randomNumber = Math.random();
  let result = randomNumber < 0.5 ? 'heads' : 'tails';
  let resultMsg = '';
  if (guess === result) {
    resultMsg = 'You win!'
  }else {
    resultMsg = 'You lose!';
  }
  console.log(resultMsg);

  resultMsg === 'You win!' ? score.wins+=1 : score.losses+=1;
  console.log(score);
};