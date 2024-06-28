const secondsElement = document.getElementById("seconds");
const minutesElement = document.getElementById("minutes");
const hoursElement = document.getElementById("hours");
const dayorNightElement = document.getElementById("dayornight");
const loader = document.querySelector('.loader')
const clock  = document.querySelector('.clock')

function addZero(value){
    value = Number(value)
    if(value<10){
        return "0" + value
    }
    return value
}

function generateTime() {
  const date = new Date();
  const seconds = addZero(date.getSeconds());
  const minutes = addZero(date.getMinutes());
  let hours;
  let dayorNight;
  function getHoursAndDayOrDay() {
    if (date.getHours() > 12) {
      hours = addZero(date.getHours() - 12);
      dayorNight = "PM";
    } else {
      hours = addZero(date.getHours());
      dayorNight = "AM";
    }
  }
  

  getHoursAndDayOrDay();
  secondsElement.innerText = seconds;
  minutesElement.innerText = minutes;
  hoursElement.innerText = hours;
  dayorNightElement.innerText = dayorNight;


  if(date.getHours()>=19){
    document.body.classList.add('night')
  }
  else if(date.getHours()<5){
    document.body.classList.add('night')
  }
  else{
    document.body.classList.remove('night')
  }

  clock.style.display = 'block'
  loader.style.display = 'none'
}

setInterval(() => {
    generateTime()
}, 1000);
