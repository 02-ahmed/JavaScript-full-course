// updated the code to have a single function that plays game
let score = JSON.parse(localStorage.getItem('score')) || {
  win: 0 ,
  loss: 0 ,
  tie: 0,
};

updateScoreElement();


//shortcut for code on top
/* if (!score) {
  score = {
    win: 0,
    loss: 0,
    tie: 0,
  }
} */

function updateScoreElement() {
  document.querySelector(".js-score")
  .innerHTML = `Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.tie}`;
}

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}


function playGame(playerMove) {
  const computerMove = pickComputerMove();
  
  let result = '';
  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    }else if (computerMove === 'paper') {
      result = 'You win.';
    }else if (computerMove === 'scissors') {
      result = 'Tie.';
    }

  }else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    }else if (computerMove === 'paper') {
      result = 'Tie.';
    }else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
    
  }else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    }else if (computerMove === 'paper') {
      result = 'You lose.';
    }else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.'){
    score.win +=1
  }else if (result === 'You lose.') {
    score.loss++;
  }else if (result === 'Tie.') {
    score.tie++;
  }
  
  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-moves").innerHTML = `You
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png" class="move-icon">
  Computer`;

  document.querySelector(".js-result").innerHTML = `${result}`;

}


function pickComputerMove() {
  let computerMove = '';
  const randomNumber = Math.random();
      if (randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock';
      }else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove= 'paper';
      }else if (randomNumber >= 2/3 && randomNumber < 1){
        computerMove= 'scissors';
      }
  
  return computerMove;
}