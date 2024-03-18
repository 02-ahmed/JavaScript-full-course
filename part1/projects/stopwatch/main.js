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
})


function startTimer() {
  setInterval(()=> {
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