const boxes = document.querySelectorAll('.box')
let isSquare = false

console.log(boxes.length)

for(let i=0; i<boxes.length; i++){
    boxes[i].addEventListener('click', (e)=>{
        checkResult(e)
    })
}

function bubblingHandler(event){
    event.stopPropagation()
}

function checkResult (e){
    if(e.target.children.length<1){
        if(isSquare){
            isSquare = false
            e.target.innerHTML = '<h1 onclick="bubblingHandler(event)" class="text-9xl text-gray-400 font-thin">X</h1>'
        }
        else{
            isSquare = true
            e.target.innerHTML = '<div onclick="bubblingHandler(event)" class="border-4 rounded-full w-[70%] h-[70%] flex justify-center items-center"></div>'
        }
    }
    
    if(isFilled()){
        if(!isCompleted()) {
            resultText.innerText = "Draw"
            resultText.classList.add('text-red-500')
            setTimeout(()=>{
                resultText.innerText = ''
                clearGame()
            }, 2000)
        }

    }

    if(isCompleted()){
        !isSquare? resultText.innerText = "Cross Wins" : resultText.innerText = "Circle Wins"
        setTimeout(()=>{
            resultText.innerText = ''
            clearGame()
        }, 2000)
    }
}


function isCompleted(){
    if(a1.children.length>0 && (a1.innerHTML == b1.innerHTML && b1.innerHTML == c1.innerHTML) ){
        return true
    }

    if(a2.children.length>0 && (a2.innerHTML == b2.innerHTML && b2.innerHTML == c2.innerHTML) ){
        return true
    }

    if(a3.children.length>0 && (a3.innerHTML == b3.innerHTML && b3.innerHTML == c3.innerHTML) ){
        return true
    }

    if(a1.children.length>0 && (a1.innerHTML == a2.innerHTML && a2.innerHTML == a3.innerHTML) ){
        return true
    }

    if(b1.children.length>0 && (b1.innerHTML == b2.innerHTML && b2.innerHTML == b3.innerHTML) ){
        return true
    }

    if(c1.children.length>0 && (c1.innerHTML == c2.innerHTML && c2.innerHTML == c3.innerHTML) ){
        return true
    }

    if(a1.children.length>0 && (a1.innerHTML == b2.innerHTML && b2.innerHTML == c3.innerHTML) ){
        return true
    }

    if(c1.children.length>0 && (c1.innerHTML == b2.innerHTML && b2.innerHTML == a3.innerHTML) ){
        return true
    }
}


function clearGame (){
    for(let i = 0; i<boxes.length; i++){
        boxes[i].innerHTML = ''
    }
}

function isFilled (){
    let filled = false
    for(let i = 0; i<boxes.length; i++){
        if(boxes[i].children.length == 0){
            filled = false
            break
        }
        else filled = true
    }
    return filled
}
