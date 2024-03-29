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
    document.querySelector('.js-autoplay-button').innerHTML = 'Stop Playing';
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    document.querySelector('.js-autoplay-button').innerHTML = 'Auto Play';
  }
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('scissors')
});

document.querySelector('.js-reset-button').addEventListener('click', () => {
  renderConfirmation();
})

document.querySelector('.js-autoplay-button').addEventListener('click', () => {
  autoPlay();
});

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else if (event.key === 'a') {
    autoPlay();
  }else if (event.key === 'Backspace') {
    renderConfirmation();
  }
})

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

function renderConfirmation() {
  let confirmationHTML = '';

  const html = `
  <p class ="js-reset-confirmation">
    Are you sure you want to reset the score?
    <button class='js-yes-button confirm-button'>Yes</button>
    <button class='js-no-button confirm-button'>No</button>  
  </p>
    
  `;
  confirmationHTML+=html;

  document.querySelector('.js-confirmation').innerHTML = confirmationHTML;

  document.querySelector('.js-yes-button').addEventListener('click', () => {
    document.querySelector('.js-reset-confirmation').innerHTML = '';
    score.win = 0;
    score.loss = 0;
    score.tie = 0;
    localStorage.removeItem('score');
    alert(`Score was reset`);
    updateScoreElement();
    document.querySelector('.js-confirmation').innerHTML = '';
    document.querySelector(".js-result").innerHTML = '';
    document.querySelector(".js-moves").innerHTML = '';
  });

  document.querySelector('.js-no-button').addEventListener('click',() => {
    document.querySelector('.js-reset-confirmation').innerHTML = '';
    document.querySelector('.js-confirmation').innerHTML = '';
  });

  
}