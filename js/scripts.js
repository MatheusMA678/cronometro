const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");
const toggleTheme = document.querySelector("#toggle-theme");

const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

toggleTheme.addEventListener("click", toggle);

function startTimer() {
  interval = setInterval(() => {
    if (!isPaused) {
      milliseconds += 10;
      if (milliseconds === 1000) {
        seconds++;
        milliseconds = 0;
      }
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }

      if (seconds >= 1) {
        resetBtn.style.display = "block";
      }

      minutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
      secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;
      millisecondsEl.textContent =
        milliseconds < 100 ? milliseconds.padStart(3, "0") : milliseconds;

      startBtn.style.display = "none";
      pauseBtn.style.display = "block";
    }
  }, 10);
}

function pauseTimer() {
  isPaused = true;
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "block";
}

function resumeTimer() {
  isPaused = false;
  pauseBtn.style.display = "block";
  resumeBtn.style.display = "none";
}

function resetTimer() {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;

  minutesEl.textContent = "00";
  secondsEl.textContent = "00";
  millisecondsEl.textContent = "000";

  pauseBtn.style.display = "none";
  resumeBtn.style.display = "none";
  resetBtn.style.display = "none";
  startBtn.style.display = "block";
}

function toggle() {
  document.querySelector("section").classList.toggle("dark");
  document.querySelector("body").classList.toggle("dark");
  document.querySelector("div").classList.toggle("dark");
  resumeBtn.classList.toggle("dark");
  startBtn.classList.toggle("dark");
  pauseBtn.classList.toggle("dark");
  resetBtn.classList.toggle("dark");
  toggleTheme.classList.toggle("dark");
  toggleTheme.textContent === "dark"
    ? (toggleTheme.textContent = "light")
    : (toggleTheme.textContent = "dark");
}
