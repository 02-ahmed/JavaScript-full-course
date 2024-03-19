

let time = JSON.parse(localStorage.getItem('time')) || {
  hour: 0,
  minute: 0,
  second: 0,
}

let jsHour = document.querySelector('.js-hr');
let jsMin = document.querySelector('.js-min');
let jsSec = document.querySelector('.js-sec');

jsSec.innerHTML = ` : ${time.second}`;
jsMin.innerHTML = ` : ${time.minute}`;
jsHour.innerHTML = `  ${time.hour}`;

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

  if (intervalId) {
    return;
  }

  intervalId= setInterval(()=> {
    if (time.second < 60) {
      time.second++;
      
      if (time.second >= 60 ) {
        time.minute++;
        
        time.second = 0;
        if (time.minute >= 60) {
          time.minute = 0;
          time.hour++;         
        }
      }
    };
    localStorage.setItem('time', JSON.stringify(time));

    jsSec.innerHTML = ` : ${time.second}`;
    jsMin.innerHTML = ` : ${time.minute}`;
    jsHour.innerHTML = `${time.hour}`;

    
  }, 1000);

  
}

function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
};

function resetTimer() {
  clearInterval(intervalId);
  time.hour=0;
  time.minute=0;
  time.second=0;

  jsSec.innerHTML = ` : ${time.second}`;
  jsMin.innerHTML = ` : ${time.minute}`;
  jsHour.innerHTML = `${time.hour}`;

  localStorage.removeItem('time');

}