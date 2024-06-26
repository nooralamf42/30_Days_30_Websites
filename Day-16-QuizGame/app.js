const api = "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple";
const optionDiv1 = document.querySelector(".optionDiv1");
const optionDiv2 = document.querySelector(".optionDiv2");
const optionDiv3 = document.querySelector(".optionDiv3");
const optionDiv4 = document.querySelector(".optionDiv4");
const errorH1 = document.getElementById("error");
const loader = document.getElementById("loader");
const quizBox = document.getElementById("quizBox");
const question = document.getElementById("question");
const checkBoxs = document.querySelectorAll("input");

checkBoxs.forEach(checkBox=>checkBox.addEventListener("click", (e) => checkOption(e)))

const rightAnswerSound = new Audio('https://cdn.pixabay.com/download/audio/2023/12/31/audio_e8faf66947.mp3')
const wrongAnswerSound = new Audio("https://cdn.pixabay.com/download/audio/2022/03/10/audio_8b0fae46ef.mp3")
const resultSound = new Audio("https://cdn.pixabay.com/download/audio/2023/06/11/audio_b92d806bde.mp3?filename=new-information-153314.mp3")

let quizPage = 0;
let score = 0;
let correctAnswer;

let apiData = null;

fetch(api)
  .then((res) => res.json())
  .then((data) => {
    apiData = data;
    generateQuestion(data);
  })
  .catch((e) => {
    quizBox.classList.add("hidden");
    loader.classList.add("hidden");
    errorH1.classList.remove("hidden");
    errorH1.innerText = e.message;
  });

function generateQuestion(data) {
    setTimeout(()=>console.log(quizPage, Date.now()), 0)
  loader.classList.add("hidden");
  quizBox.classList.remove("hidden");
  const apiData = data.results[quizPage];
  quizPage += 1;
  let tempOptions = apiData.incorrect_answers;
  correctAnswer = apiData.correct_answer;
  tempOptions.push(correctAnswer);
  let options = [];
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * tempOptions.length);
    options.push(tempOptions[randomIndex]);
    tempOptions.splice(randomIndex, 1);
  }

  for (let i = 0; i < options.length; i++) {
    document.querySelector(`.optionDiv${i + 1}`).children[0].innerHTML =
      options[i];

    checkBoxs[i].checked = false;
  }

  question.innerHTML = "Q." + quizPage + ": " + apiData.question;
}

function checkOption(e) {
    e.stopPropagation()
  const chosenOption = e.target.previousElementSibling;
  checkBoxs.forEach((checkBox) => (checkBox.disabled = true));

  if (chosenOption.innerHTML == correctAnswer) {

    rightAnswerSound.play()
    chosenOption.parentElement.style.backgroundColor = "green";
    score += 1;
  } else {
    wrongAnswerSound.currentTime = 0
    wrongAnswerSound.play()
    chosenOption.parentElement.style.backgroundColor = "red";
  }
  if(quizPage == 5){
    resultSound.play()
    setTimeout(()=>{
        quizBox.innerHTML = `<h1 style='text-align: center; font-size: 2rem'>Your score is ${score}</h1><h2 style='text-align: center'>reload to restart</h2>`
    }, 1000)
  }
  else
   setTimeout(()=>{
    checkBoxs.forEach((checkBox) => (checkBox.disabled = false));
    chosenOption.parentElement.style.backgroundColor = "white";
    generateQuestion(apiData)
  }, 1000);
}
