const buttonParent = document.getElementById("buttonParent");

function noHandler() {
  if (buttonParent.style.cssText.includes("column-reverse")) {
    buttonParent.style.cssText = "flex-direction: column";
  } else {
    buttonParent.style.cssText = "flex-direction: column-reverse";
  }
}

function messageHandler(){
    window.open("https://api.whatsapp.com/send?phone=yournumberhere&text=hi,%20I%20like%20you")
}