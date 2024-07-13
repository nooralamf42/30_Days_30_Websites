const gameContainer = document.getElementById("container");
const message = document.getElementById("message");
const scoreElement = document.getElementById("score");
const highScoreElement = document.getElementById("highScore");
const upKey = document.getElementById("num-2");
const downKey = document.getElementById("num-5");
const leftKey = document.getElementById("num-4");
const rightKey = document.getElementById("num-6");
const clrKey = document.getElementById("key-clr");

const totalColumns = 30;
const totalRows = 21;

let snake = [{ x: 15, y: 11 }];
let food = getRandomLocation();
let gameSpeed = 200;  // here i had choosed speed in string

let direction = "right";
let gameStart = false;

let gameInterval;

let score = 0;
let highScore = localStorage.getItem("highScore")
  ? localStorage.getItem("highScore")
  : localStorage.setItem("highScore", 0);

highScoreElement.innerHTML = highScore;

window.addEventListener("keydown", controlSnake);

function getRandomLocation() {
  let x = Math.floor(Math.random() * totalColumns) + 1;
  let y = Math.floor(Math.random() * totalRows) + 1;
  return { x, y };
}

function controlSnake(e) {
  if (e.key == "ArrowRight") direction = "right";
  else if (e.key == "ArrowLeft") direction = "left";
  else if (e.key == "ArrowUp") direction = "up";
  else if (e.key == "ArrowDown") direction = "down";
  else if (e.key.toUpperCase() == "C") {
    gameStart = true
    startGame() ;
  }
}

function drawSnake() {
  snake.map((snakePart) => createGameElement(snakePart, "snake"));
}

function drawFood() {
  createGameElement(food, "food");
}

function createGameElement(element, className) {
  let gameElement = document.createElement("div");
  gameElement.classList.add(className);
  gameElement.style.gridColumn = element.x;
  gameElement.style.gridRow = element.y;
  gameContainer.appendChild(gameElement);
}

function draw() {
  gameContainer.innerHTML = "";
  drawSnake();
  drawFood();
}

function moveSnake() {
  let snakeHead = { ...snake[0] };
  switch (direction) {
    case "right":
      snakeHead.x = snakeHead.x + 1;
      break;
    case "left":
      snakeHead.x = snakeHead.x - 1;
      break;
    case "up":
      snakeHead.y = snakeHead.y - 1;
      break;
    case "down":
      snakeHead.y = snakeHead.y + 1;
      break;
  }
  snake.unshift(snakeHead);
  if (snakeHead.x == food.x && snakeHead.y == food.y) {
    score += 1;
    scoreElement.innerHTML = score;
    if (Number(score) > Number(highScore)) {
      highScore = score;
      highScoreElement.innerHTML = highScore;
      localStorage.setItem("highScore", highScore);
    }
    food = getRandomLocation();
  } else snake.pop();
}

function checkCollison() {
  let snakeHead = snake[0];
  if (
    snakeHead.x < 1 ||
    snakeHead.x > totalColumns + 2 ||
    snakeHead.y < 1 ||
    snakeHead.y > totalRows
  ) {
    gameOver();
  }
  for (let i = 1; i < snake.length; i++) {
    if (snakeHead.x == snake[i].x && snakeHead.y == snake[i].y) {
      gameOver();
    }
  }
}

function gameOver() {
    gameSpeed = 200  //forgot to reset gamespeed 
    score = 0 //forgot to reset score
  clearInterval(gameInterval);
  setTimeout(() => {
    snake = [{ x: 15, y: 11 }];
    gameContainer.innerHTML = "";
    message.innerHTML = "Game OVER!<br/>Press 'C' to play again";
    message.style.display = "flex";
  }, 1000);
}

function startGame() {
  gameInterval = setInterval(() => {
    message.style.display = "none";
    moveSnake();
    draw();
    if (score > 3 && score < 11) {
      gameSpeed -= 15;
    } else if (score == 11) {
      gameSpeed -= 50;
    } else if (score == 15) {
      gameSpeed -= 30;
    }
    checkCollison();
  }, gameSpeed);
}

upKey.onclick = () => direction = "up";
downKey.onclick = () => direction = "down";
rightKey.onclick = () => direction = "right";
leftKey.onclick = () => direction = "left";
clrKey.onclick = () => startGame();

// console.log(downKey, rightKey, leftKey, clrKey  )