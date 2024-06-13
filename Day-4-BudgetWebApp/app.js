let whichButton = ''
const transactionParent = document.getElementById('transactions')
const amount = document.getElementById('amount')
const details = document.getElementById('details')
const balance = document.getElementById('balance')
const expense = document.getElementById('expense')
const income = document.getElementById('income')

function clickHandler1(){
    whichButton = 'expense'
}

function clickHandler2(){
    whichButton = 'income'
}

function submitHandler (e){
    e.preventDefault()
    
    if(whichButton=='expense'){
        balance.innerText = Number(balance.innerText) - Number(amount.value)
        expense.innerText = Number(expense.innerText) + Number(amount.value)
    }
    else{
        balance.innerText = Number(balance.innerText) + Number(amount.value)
        income.innerText = Number(income.innerText) + Number(amount.value)
    }

    const transaction = document.createElement('h2')
    transaction.className = `border-2 text-xl rounded-xl py-2 px-4 ${whichButton=='expense'? 'border-red-400' : 'border-green-400'}`

    transaction.innerText = `${whichButton} ₹${amount.value} by ${details.value}`
    transactionParent.appendChild(transaction)
    amount.value = ''
    details.value = ''
}

const form = document.getElementById('form')
form.addEventListener('submit', (e)=>submitHandler(e))

