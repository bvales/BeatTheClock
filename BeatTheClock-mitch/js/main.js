window.addEventListener("load", init);

// Globals

// Available Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1
};

// To change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// Dom Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition"
];

// Initialize Game
function init() {
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener("input", startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output a random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown Timer
let spriteDeets = {
  frameWidth: 156,
  curCount: 0,
  curPosition: 0,
  maxCount: 5,
}
function countdown() {
  // Check Timer has not run out
  if (time > 0) {
    // Decrease the time
    time--;

    spriteDeets.curCount++;
    if (spriteDeets.curCount >= spriteDeets.maxCount)
    {
      spriteDeets.curCount = 0; //reset back to the beginning
    }
    
    let newPostion = parseInt(spriteDeets.frameWidth * spriteDeets.curCount * -1);
    spriteDeets.curPosition = newPostion;
    console.log(newPostion, spriteDeets.curPosition);

    let tWheel = document.querySelector('.tWheel');
    tWheel.style.backgroundPosition = spriteDeets.curPosition +'px 0px';

    console.log(tWheel);


  } else if (time === 0) {
    // Game is over
    isPlaying = false;
    setCount = 0;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    score = -1;
  }
}

// IDEAS TO MAKE GAME BETTER
// Keep a high score in local storage
// fetch words from an api make it more robust
// game over make border red and reset when game starts again
// Level Selection by user

// function image_over() {
//   var newSrc = this.dataset.one;
//   this.src = newSrc;
// }

// function timer_Wheel() {
//   var newSrc = this.dataset.one;
//   this.src = newSrc;
// }
