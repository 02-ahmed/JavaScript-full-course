const buttonElement = document.querySelector('.js-button');

console.log(buttonElement.classList.contains('js-button'));


function buttonSwitch(whichButton) {
 /*  const allButtons = document.querySelectorAll('.game');
  allButtons.forEach(button => {
    if (button.classList.contains('is-toggled')) {
      button.classList.remove('is-toggled');
    }
  }) */
  
  const jsButton = document.querySelector(`.js-${whichButton}-button`);
  if (jsButton.classList.contains('is-toggled') === false) {
    const previousButton = document.querySelector('.is-toggled');
    if (previousButton) {
      previousButton.classList.remove('is-toggled');
    }
    jsButton.classList.add('is-toggled');
  }else {
    jsButton.classList.remove('is-toggled');
  }
}