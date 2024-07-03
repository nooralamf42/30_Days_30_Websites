const days = document.getElementById("days")
const quote = document.getElementById("quote")
const loader = document.querySelector(".loader")
const countDownElement = document.querySelector('.countdown')
const api = 'https://zenquotes.io/api/today'

let today = new Date()

let currentYear = today.getFullYear()
let nextYear = new Date(currentYear + 1, 0, 1)

let milliSecondsInADay = 24*60*60*1000
const daysLeft = Math.floor((nextYear - today)/milliSecondsInADay)


fetch(api)
    .then(res=>res.json())
    .then(data=>{
        if(data[0].h.includes('Too many requests')){
            quote.innerHTML = "Nothing is impossible"
        }
        else quote.innerHTML = data[0].h
    })
    .catch(()=>quote.innerHTML = "Nothing is impossible")
    .finally(()=>{
        loader.classList.add('hidden')
        countDownElement.classList.remove('hidden')
        days.innerHTML = daysLeft + " Days Left"
    })
