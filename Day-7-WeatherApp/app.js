const input = document.getElementById("input");
const temperature = document.getElementById("temperature");
const city = document.getElementById("location");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherImage = document.getElementById("weatherImage");
const weatherCard = document.getElementById("weatherCard")
const weather = document.getElementById("weather")
const apiKey = "0eb5d5d0b6722c6268094c8ff160c359";

function getWeatherData(cityName) {
  const response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
  ).then((res) => res.json());
  console.log(response)
  return response;
}

function submitHandler(e) {
  e.preventDefault();
  getWeatherData(input.value)
    .then((data) => {
      if (data.hasOwnProperty("message")) {
        console.log(data)
        const prevValue = input.value
        input.value = "City not found!!"
        setTimeout(()=>{
            input.value = prevValue
        }, 2000)
      }
      else
      {
        weatherCard.style.display = 'block'
        temperature.innerText = data.main.temp + "° C";
        humidity.innerText = 'Humidity is '+ data.main.humidity + " %";
        wind.innerText = 'Wind speed is '+ data.wind.speed + "m/s";
        city.innerText = data.name;
        weatherImage.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weather.innerText = data.weather[0].main
      }
    })
    .catch((e) => console.log(e));
}
