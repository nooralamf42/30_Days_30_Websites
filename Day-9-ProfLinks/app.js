// const data = {
//     username : 'noor',
//     bio : 'im web dev',
//     profileImage : 'https://media.licdn.com/dms/image/D5603AQEmTlkzu1ljdw/profile-displayphoto-shrink_200_200/0/1718210954784?e=1724284800&v=beta&t=E5Cx3yG6LRf1VEA3Jh0gJeN0-hz24Ds2bOj_RsIldT8',
//     socialLinks : [
//         {    
            // linkName : 'facebook'
//             linkUrl : 'facbook.com/nooralam'
//         },
//         {
//             instagram : 'insta.com/nooralam'
//         }
//     ]
// }

const loader = document.querySelector('.loader')
const card = document.querySelector('.card')
const username = document.querySelector('.username')
const bio = document.querySelector('.bio')
const profileImage = document.querySelector('.profile-image')
const linkName = document.querySelector('.link-name')
const linkUrl = document.getElementById('linkUrl')
const linkCard = document.querySelector('.inner-card')


function applyData(data){
    username.innerText = data.username
    bio.innerText = data.bio
    profileImage.src = data.profileImage
    console.log(data.socialLinks)
    data.socialLinks.map(link=>{
        linkCard.innerHTML = linkCard.innerHTML + 
        `<a id="linkUrl" class="link-div" href="${link.linkUrl}">
            <img src="icons/${link.linkName}.png" alt="" class="icon">
            <h2 class="link-name">${link?.linkName}</h2>
        </a>`
    })    
}


function fetchData (){
    loader.style.display = 'block'
    fetch('https://api.npoint.io/647120cf61c6f9cc6500')
            .then(data=>data.json())
            .then(data=>{
                loader.style.display = 'none'
                card.style.display = 'block'
                applyData(data)
            })
}

fetchData()