const todoText = document.getElementById('todoText')
const todosDiv = document.querySelector(".todos")
let todos = []

if(localStorage.getItem('todos')){
    todos = JSON.parse(localStorage.getItem('todos'))
    generateTodos()
}


function addTodo(e){
    e.preventDefault()
    let todo = {
        todoValue : todoText.value,
        status : false
    }

    todos.push(todo)
    todoText.value = ''
    
    generateTodos()
}

function generateTodos(){
    todosDiv.innerHTML = ''
    localStorage.setItem('todos', JSON.stringify(todos))
    todos.map((todo, index) =>{
        let currentTodo = 
            `<div class="todo">
                <form id="form${index}" class="editForm" onsubmit="editFormTodo(event)">
                    <div class= 'leftEditForm'>
                        <input id='checkbox${index}' ${todos[index].status && 'checked' } onclick="checkHandler(${index},event)" type="checkbox" name="" >
                        <input class='editInput' type="text" ${todos[index].status && 'style= "text-decoration: line-through"'} required disabled value="${todo.todoValue}" id="input${index}">
                    </div>
                    <div class="editFormButtons">
                        <button type="" class="editButton">
                            <img src="/icons/edit.png" alt="" srcset="" id='editIcon${index}'>
                        </button>
                        <button type="button" class="editButton" onclick='deleteTodo(${index})'>
                            <img src="/icons/close.png" alt="" srcset="">
                        </button>
                    </div>
                </form>
            </div>`

            todosDiv.innerHTML  += currentTodo
    })  
}

function checkHandler(index, event){
    const isChecked = event.target.checked
    const input = document.getElementById(`input${index}`)

    if(!isChecked){
        todos[index].status = false
        input.style.textDecoration = 'none'
    }
    else{
        todos[index].status = true
        input.style.textDecoration = 'line-through'
    }

    localStorage.setItem('todos', JSON.stringify(todos))

}

function deleteTodo(index){
    todos.splice(index,1)
    generateTodos()
}

function editFormTodo(event){

    let index = event.target.id.replace('form', '')
    event.preventDefault()
    
    const buttonImage = document.getElementById(`editIcon${index}`)
    const input = document.getElementById(`input${index}`)
    const isInputDisable = input.disabled
    if(isInputDisable){
        input.disabled = false
        input.style.borderBottom = '0.5px solid gray'
        buttonImage.src = '/icons/save.png'
    }
    else{
        todos[index].todoValue = input.value
        input.disabled = true
        input.style.borderBottom = 'none'
        buttonImage.src = '/icons/edit.png'
    }
    
    localStorage.setItem('todos', JSON.stringify(todos))
}
