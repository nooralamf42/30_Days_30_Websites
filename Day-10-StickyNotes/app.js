const addCardForm = document.querySelector('.addCardForm')
const noteText = document.getElementById('noteText')
const mainCard = document.querySelector('.mainCard')
const addCard = document.querySelectorAll('.noteCard')

let notes = []

function addNote(){
    addCardForm.classList.remove('hideElement')
}

function removeNote(noteName){
    notes = notes.filter((note)=>note!=noteName)
    createNotes()
}

function createNotes(){
    mainCard.innerHTML = ''
    notes?.map((note, index)=>{
        let html = 
        `<div class="noteCard card" id='${index}'>
            <h1 class="note">
                ${note}
             </h1>
            <button id="closeButton" onclick="removeNote('${note}')">
                X
            </button>
        </div>`

        mainCard.insertAdjacentHTML('afterbegin', html)
    })
}

function submitNote(e){
    e.preventDefault()
    notes.push(noteText.value)
    noteText.value = ''

    createNotes()
    addCardForm.classList.add('hideElement')
}