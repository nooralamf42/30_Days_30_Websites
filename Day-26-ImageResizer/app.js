const uploadImageDiv = document.querySelector('.uploadImageDiv')
const imageUpload = document.getElementById('image-upload')
const uploadDivImage = document.getElementById('uploadDivImage')

const formDiv = document.querySelector('.formDiv')
const imageWidth = document.getElementById('image-width')
const imageHeight = document.getElementById('image-height')
const maintainAspectRatio = document.getElementById('maintain-aspect-ratio')
const reduceSize = document.getElementById('reduce-size')

let aspectRatio
let pictureQuality = 1.0

uploadImageDiv.onclick = function (){
    imageUpload.click()
}

imageUpload.onchange = function(){
    let selectedImage = imageUpload.files[0]
    if(!selectedImage) return

    formDiv.style.display = 'block'
    let imageUrl = URL.createObjectURL(selectedImage)
    uploadDivImage.classList.add('uploadedImage')
    uploadDivImage.src = imageUrl
    uploadDivImage.onload = function(){
        imageHeight.value = uploadDivImage.naturalHeight
        console.log(typeof uploadDivImage.naturalHeight)
        imageWidth.value = uploadDivImage.naturalWidth
        aspectRatio = uploadDivImage.naturalWidth / uploadDivImage.naturalHeight
    }

}

function keepAspectRatio(){
    
}

imageWidth.oninput = () =>{
    if(maintainAspectRatio.checked){
        imageHeight.value = Math.floor(Number(imageWidth.value) / aspectRatio)
    }
}

imageHeight.oninput = () =>{
    if(maintainAspectRatio.checked){
        imageWidth.value = Math.floor(Number(imageHeight.value) * aspectRatio)
    }
}

function downloadImage(e){
    e.preventDefault()

    if(reduceSize.checked) pictureQuality = 0.6

    console.log(pictureQuality)
    const canvas = document.createElement('canvas')
    const canvasContext = canvas.getContext('2d')
    canvas.height = imageHeight.value
    canvas.width = imageWidth.value
    

    canvasContext.drawImage(uploadDivImage, 0, 0, canvas.width, canvas.height)
    
    const link = document.createElement('a')
    link.href = canvas.toDataURL('image/jpeg', pictureQuality)
    link.download = 'resized image'
    link.click()
}

