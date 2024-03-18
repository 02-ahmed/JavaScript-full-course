let hour = 1;
let minute = 59;
let second = 55;

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
})

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
}