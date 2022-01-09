const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const historyBtn = document.querySelector(".history");
const stopwatch = document.querySelector(".stopwatch");
const time = document.querySelector(".time");
const timeList = document.querySelector(".time-list");

const paint = document.querySelector(".paint");
const infoBtn = document.querySelector(".info");
const modalShadow = document.querySelector(".modal-shadow");
const closeModalBtn = document.querySelector(".close");
const red = document.querySelector(".red");
let countTime;
let minutes = 0;
let seconds = 0;
let number = 0;

const changeTime = () => {
  clearInterval(countTime);
  countTime = setInterval(() => {
    if (seconds < 9) {
      seconds++;
      stopwatch.textContent = `${minutes}:0${seconds}`;
    } else if (seconds >= 9 && seconds < 59) {
      seconds++;
      stopwatch.textContent = `${minutes}:${seconds}`;
    } else {
      minutes++;
      seconds = 0;
      stopwatch.textContent = `${minutes}:${seconds}`;
    }
  }, 200);
};

const pause = () => {
  clearInterval(countTime);
};

const stop = () => {
  if (stopwatch.textContent !== "0:00") {
    number++;

    clearInterval(countTime);
    const lastTime = stopwatch.textContent;
    time.style.visibility = "visible";
    time.textContent = `Last time ${lastTime}`;

    const li = document.createElement("li");
    li.textContent = `${number}. ${lastTime}`;
    timeList.append(li);
    timeList.style.display = "none";
    stopwatch.textContent = "0:00";
    return (seconds = 0), (minutes = 0);
  }
};

const reset = () => {
  clearInterval(countTime);
  minutes = 0;
  seconds = 0;
  number = 0;
  time.style.visibility = "hidden";
  stopwatch.textContent = "0:00";
  while (timeList.firstChild) timeList.removeChild(timeList.firstChild);
};

const openModal = () => {
  modalShadow.style.display = "block";
};

const closeModal = () => {
  modalShadow.style.display = "none";
};

const showHistory = () => {
  if (timeList.style.display === "none") {
    timeList.style.display = "block";
  } else {
    timeList.style.display = "none";
  }
};

const showColors = () => {
  red.classList.toggle("redShow");
};

startBtn.addEventListener("click", changeTime);
pauseBtn.addEventListener("click", pause);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
infoBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
historyBtn.addEventListener("click", showHistory);
paint.addEventListener("click", showColors);
