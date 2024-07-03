const buttons = document.querySelectorAll('button')
buttons.forEach(button => button
    .addEventListener('click', (e)=>addInput(e)))

const display = document.getElementById('display')

let calculationData = ''    

document.addEventListener('keypress', (e)=>{
    if(e.key=="Enter" && display.value !=''){
        display.value = eval(display.value.replaceAll('x', '*'))
    }
})
function addInput(e){
    let userInput = e.target.innerHTML

    if(userInput == 'C'){
        calculationData = ''
    }
    else if(userInput == 'B'){
        calculationData = calculationData.substring(0, calculationData.length-1)
    }
    else if(userInput == "="){

        if(calculationData !='')
        calculationData = eval(calculationData.replaceAll('x','*'))
    }
    else{
        calculationData += userInput
    }

    display.value = calculationData
}