const form = document.getElementById('passwordForm')
const range = document.getElementById('range')
const specialChar = document.getElementById('specialChar')
const numberInput = document.getElementById('number')
const passwordLength = document.getElementById('passwordLength')
const passwordText = document.getElementById('passwordText')
const copyButton = document.getElementById('copyBtn')


form.addEventListener('submit', (e)=>generatePassword(e))
range.addEventListener('input', handleRange)
copyButton.addEventListener('click', copyPassword)

const alphabetsLowerCase = 'abcdefghijklmnopqruvwxyz'
const alphabetsUpperCase = 'ABCDEFGHIJKLMNOPQRUVWXYZ'
const number = '01234567989'
const specialChars = '!@#$%^&*()_+='

let password = 'NEW PASS WORD FOR NOW HELL OWORLD WHREA RE YOU MY LOVE '

handleRange()

function copyPassword(){
    navigator.clipboard.writeText(password)
    copyButton.innerText = 'copied !'
    setTimeout(()=>{
        copyButton.innerText = 'copy'
    }, 1000)
}

function handleRange(){
    passwordLength.innerText = range.value
}

function randomPassword(lenght){
    let passwordString = alphabetsLowerCase + alphabetsUpperCase
    if(numberInput.checked){
        passwordString+= number
    }

    if(specialChar.checked){
        passwordString+= specialChars
    }

     for(i=0; i<lenght; i++){
        const randomIndex = Math.floor(Math.random()*passwordString.length)
        console.log(passwordString)
        password = password + passwordString[randomIndex] 
     }
}

function generatePassword(e){
    e.preventDefault()
    password = ''
    randomPassword(range.value)
    passwordText.value = password
}



