const userInput = document.getElementById('userInput')
const cards = document.getElementById('cards')
const loader = document.getElementById('loader')
const errorMessage = document.getElementById('error')

function searchImage(e){
    cards.innerHTML = ''
    loader.classList.remove('hidden')
    errorMessage.classList.add('hidden')
    e.preventDefault()
    console.log(userInput.value)
    getImages(userInput.value).then(data=>createCards(data.results))
}

function getImages(input){
    return fetch(`https://api.unsplash.com/search/photos?page=1&query=${input}`, {
        headers: {
            Authorization: `Client-ID GglTfi7p3S4tZUxTi6KtteLsWWRGMtJuDBp4JSPo3oU`
        }
    }).then(res=>res.json()).catch((e)=>{
        errorMessage.innerHTML = e
        errorMessage.classList.remove('hidden')
        console.log(e, 'im in error')
    }).finally(()=>{
        loader.classList.add('hidden')
    })
}

function createCards(cardsArray){
    if(cardsArray.length<1){
        errorMessage.innerHTML = "No images found!"
        errorMessage.classList.remove('hidden')
    }
    cardsArray.forEach(card=>{
        let imageSrc = card.links.download
        cards.innerHTML += `
        <div class="card">
        <img src="${imageSrc}" alt="" srcset="">
    </div>
        `
    })
}