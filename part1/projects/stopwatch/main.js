let hour = 0;
let minute = 0;
let second = 0;

let jsHour = document.querySelector('.js-hr');
let jsMin = document.querySelector('.js-min');
let jsSec = document.querySelector('.js-sec');

jsSec.innerHTML = `Seconds: ${second}`;
jsMin.innerHTML = `Minutes: ${minute}`;
jsHour.innerHTML = `Hours: ${hour}`;

document.querySelector('.js-start-button').addEventListener('click', () => {
  startTimer();
});

document.querySelector('.js-stop-button').addEventListener('click', () => {
  stopTimer();
});

document.querySelector('.js-reset-button').addEventListener('click', () => {
  resetTimer();
});

let intervalId;


function startTimer() {
  intervalId= setInterval(()=> {
    if (second < 60) {
      second++;
      
      if (second >= 60 ) {
        minute++;
        
        second = 0;
        if (minute >= 60) {
          minute = 0;
          hour++;         
        }
      }
    }
    jsSec.innerHTML = `Seconds: ${second}`;
    jsMin.innerHTML = `Minutes: ${minute}`;
    jsHour.innerHTML = `Hours: ${hour}`;
  }, 1000)
}

function stopTimer() {
  clearInterval(intervalId);
};

function resetTimer() {
  clearInterval(intervalId);
  hour=0;
  minute=0;
  second=0;

  jsSec.innerHTML = `Seconds: ${second}`;
  jsMin.innerHTML = `Minutes: ${minute}`;
  jsHour.innerHTML = `Hours: ${hour}`;

}