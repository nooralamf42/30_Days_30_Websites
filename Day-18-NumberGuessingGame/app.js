const buttons = document.querySelectorAll('.numberButton')
const result = document.getElementById('result')
const loseSound = new Audio("https://cdn.pixabay.com/download/audio/2022/03/10/audio_6b59debae7.mp3?filename=wronganswer-37702.mp3")
const winSound = new Audio("https://cdn.pixabay.com/download/audio/2021/08/04/audio_c201b79c03.mp3?filename=correct-6033.mp3")

buttons.forEach(
    button=>button.addEventListener('click', (e)=>checkAnswer(e))
    )


function generateNumber(){
    return Math.floor(Math.random()*6+1)
} 

function disableButtons(option){
    buttons.forEach(button=>{
        button.disabled = option
        button.classList.add('disabledHover')
    })
}

function reset(){
    disableButtons(false)
    buttons.forEach(button=>{
        button.classList.remove('lose', 'won', 'disabledHover')
    })
    result.innerText = 'Guess the number'
}

function colorCorrectAnswerButton(number){
    buttons.forEach(button =>{
        if(Number(button.innerText)==number){
            button.classList.add('won')
        }
    })
}

function checkAnswer (e){
    disableButtons(true)
    const number = generateNumber()

    colorCorrectAnswerButton(number)
    
    const userChosenNumber = Number(e.target.innerText)
    console.log(number, userChosenNumber)
    if(number == userChosenNumber){
        result.innerText = ('you won')
        e.target.classList.add('won')
        winSound.play()
    }
    else{
        result.innerText = ('you lost')
        e.target.classList.add('lose')
        loseSound.play()
    }
    
    setTimeout(()=>reset(), 1500)
    
}