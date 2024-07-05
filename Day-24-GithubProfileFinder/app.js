let api = 'https://api.github.com/users/'
const loader = document.getElementById("loader")
const notFound = document.getElementById("notFound")
const userInput = document.getElementById("userInput")
const errorMessage = document.getElementById("errorMessage")
const card = document.querySelector(".card")

function searchProfile(e){
    e.preventDefault()
    card.style.display = 'none'
    errorMessage.innerHTML = ''
    notFound.style.display = 'none'
    loader.style.display = 'block'
    loader.classList.add('hidden')

    fetch(api + userInput.value)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.message=="Not Found"){
                notFound.style.display = 'block'
            }
            else{
                showCard(data)
            }
        })
        .catch(e=>{
            errorMessage.innerHTML = e
        })
        .finally(()=>{
            loader.style.display = 'none'
        })

        userInput.value = ''
}

function showCard(data){
    card.style.display = 'block'
    let innerHTML = `
    <div class="card-top">
        <img src="${data.avatar_url}" alt="" srcset="">
        <div>
            <h2>${data.name}</h2>
            <h2>@${data.login}</h2>
            <h2> <span>${data.followers}</span> Followers</h2>
            <h2> <span>${data.following}</span> Following</h2>
        </div>
    </div>
   <div class="card-bottom">
        <h1>${data.bio}</h1>
        <div class="flex"><p>Repositories : ${data.public_repos}</p>
            <a href="${data.html_url}">visit profile</a>
        </div>
   </div>

    `
    card.innerHTML = innerHTML
}