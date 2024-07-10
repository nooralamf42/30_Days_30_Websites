let userName = window.location.href.split('name=')[1]
let capitalizedName = []

const card = document.querySelector(".card-inner")
const muteBtn = document.querySelector(".muteBtn")
const userNameSpan = document.querySelector(".userName")


let isMusicPlaying = false

const wishingSound = new Audio('https://cdn.pixabay.com/download/audio/2023/09/13/audio_e265103dcb.mp3?filename=happy-birthday-3-version-166417.mp3')

if(userName.includes("_")){
    userName = userName.split("_")
    for(let i=0; i<userName.length; i++){
        capitalizedName.push(capitalizeFirstLettor(userName[i]))
    }
    capitalizedName = capitalizedName.join(' ')
}
else capitalizedName = capitalizeFirstLettor(userName)

userNameSpan.innerHTML = capitalizedName

function capitalizeFirstLettor(word){
    return word[0].toUpperCase() + word.slice(1)
}

function showCard(){
    card.classList.add('showCard')
    muteBtn.removeAttribute('hidden')
    wishingSound.play()
    isMusicPlaying = true
}



function muteAudio(){
    if(isMusicPlaying){
        wishingSound.pause()
        muteBtn.innerHTML = 'unmute'
        isMusicPlaying = false
    }  
    else {
        wishingSound.play()
        isMusicPlaying = true
        muteBtn.innerHTML = 'mute'
    }
}