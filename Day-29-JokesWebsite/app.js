const apiKey = '4be4fb7cd60d4013e9f97ac5d542'

const funnyImages = []

for(let i=1; i<=5; i++){
    funnyImages.push('images/' + i + '.jpg')
}

console.log(funnyImages)

const api = `https://hindi-jokes-api.onrender.com/jokes?api_key=${apiKey}`

const joke = document.getElementById('joke')
const loader = document.getElementById('loader')
const jokesDiv = document.querySelector('.jokesDiv')
const errorh1 = document.getElementById('error')
const jokeImage = document.getElementById('funnyImage')

console.log(funnyImages[0])

fetch(api)
    .then(response=>response.json())
    .then(data=>{
        joke.innerText = data.jokeContent
        jokeImage.src = funnyImages[Math.floor(Math.random()*4)]
        loader.classList.add('hidden')
        jokesDiv.classList.remove('hidden')
    })
    .catch(e=>{
        loader.classList.add('hidden')
        errorh1.innerHTML = e
        errorh1.classList.remove('hidden')
    })