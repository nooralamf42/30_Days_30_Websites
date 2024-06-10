fetch('https://api.quotable.io/quotes/random')
    .then(res=>res.json())
    .then(data=>{
        document.querySelector('.card p').innerText=data[0].content
        document.querySelector('.loader').style.display = 'none'
    })