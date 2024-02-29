let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0 ,
  losses: 0,
};


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

  localStorage.setItem('score', JSON.stringify(score));

  alert(`wins: ${score.wins}
losses: ${score.losses}`)
  
};
