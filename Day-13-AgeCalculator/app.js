const userAge = document.getElementById("userAge")
const result = document.getElementById('result')

function calculateAge(e){
    e.preventDefault()
    const dobDateObject = new Date(userAge.value)
    const currentDateObject = new Date()

    const year = currentDateObject.getFullYear() - dobDateObject.getFullYear()
    const month = (currentDateObject.getMonth() - dobDateObject.getMonth())
    const day = currentDateObject.getDate() - dobDateObject.getDate()

    result.innerHTML = `You are <span class='year'>${year} year</span>, ${month} month and ${day} day old.`
}