const buttonElement = document.querySelector('.js-button');

console.log(buttonElement.classList.contains('js-button'));


function buttonSwitch() {
  const jsButton = document.querySelector('.js-game-button');
  if (jsButton.classList.contains('is-toggled') === false) {
    jsButton.classList.add('is-toggled');
  }else {
    jsButton.classList.remove('is-toggled');
  }
}