const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

const hourh1 = document.getElementById("hour");
const minh1 = document.getElementById("min");
const sech1 = document.getElementById("sec");
const msh1 = document.getElementById("ms");

startButton.onclick = () => startStopwatch();
stopButton.onclick = () => stopStopwatch();
resetButton.onclick = () => resetStopwatch();

let hour = 0,
  min = 0,
  sec = 0,
  ms = 0;

let interval;
let clickCount = 0

function startStopwatch() {
  clickCount += 1
  if(clickCount == 1){
    startTimer();
  }
}

function stopStopwatch() {
    clickCount = 0
  clearInterval(interval);
}

function resetStopwatch() {
    clickCount = 0
  clearInterval(interval);
  min = 0, hour = 0, sec = 0, ms = 0
  msh1.innerHTML = '00'
  sech1.innerHTML = '00'
  minh1.innerHTML = '00'
  hourh1.innerHTML = '00'
}

function startTimer() {
  interval = setInterval(() => {
    ms += 1

    if(ms == 100){
        sec +=1
        ms = 0
        sech1.innerHTML = sec<10? "0" + sec : sec
    }

    if(sec == 60){
        min += 1
        sec = 0
        minh1.innerHTML = min<10 ? "0" + min : min
    }

    if(min == 60){
        hour += 1
        min = 0
        hourh1.innerHTML = hour>10 ? "0" + hour : hour
    }

    msh1.innerHTML = ms<10? "0" + ms : ms
  }, 10);
}
