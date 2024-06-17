const options = ["rock", "paper", "scissor"];
const computer = document.querySelector(".left-image");
const user = document.querySelector(".right-image");
const result = document.getElementById("result");

function computerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

function checkResult(e) {
  user.classList.add("animate-right");
  computer.classList.add("animate-left");

  user.src = 'images/rock.png'
  computer.src = 'images/rock.png'

  setTimeout(() => {
    user.classList.remove("animate-right");
    computer.classList.remove("animate-left");

    const userChoosed = e.target.name;
    const computerChoosed = computerChoice();

    computer.src = "images/" + computerChoosed + ".png";
    user.src = "images/" + userChoosed + ".png";

    console.log(userChoosed, computerChoosed);
    
    if (userChoosed == computerChoosed) {
      result.innerText = ("Draw");
    } else if (userChoosed == "rock") {
      if (computerChoosed == "paper") {
        result.innerText = ("Computer wins");
      } else {
        result.innerText = ("User wins");
      }
    } else if (userChoosed == "paper") {
      if (computerChoosed == "scissor") {
        result.innerText = ("Computer wins");
      } else {
        result.innerText = "User wins";
      }
    } else if (userChoosed == "scissor") {
      if (computerChoosed == "rock") {
        result.innerText = ("Computer wins");
      } else {
        result.innerText = ("User wins");
      }
    }
  }, 1000);
}

