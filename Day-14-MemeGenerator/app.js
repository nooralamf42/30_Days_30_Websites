const btn = document.querySelector('.btn')
const api = 'https://meme-api.com/gimme'
const memeImage = document.getElementById('memeImage')
const loader = document.getElementById('loader')

btn.addEventListener('click', generateMeme)

function generateMeme(){
    memeImage.style.display = 'none'
    loader.style.display = 'block'
    fetch(api)
    .then((response)=>response.json())
    .then(({url})=>{
        memeImage.src = url
        btn.innerText = 'Generate Another'
        loader.style.display = 'none'
        memeImage.style.display = 'block'
    })
}