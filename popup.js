let timer;
let seconds = 25 * 60;

function updateDisplay() {
  const min = String(Math.floor(seconds / 60)).padStart(2, '0');
  const sec = String(seconds % 60).padStart(2, '0');
  document.getElementById("timer").textContent = `${min}:${sec}`;
}

document.getElementById("start").addEventListener("click", () => {
  if (timer) return;
  timer = setInterval(() => {
    if (seconds > 0) {
      seconds--;
      updateDisplay();
    } else {
      clearInterval(timer);
      timer = null;
      alert("25 minutes passed. It's time to rest");
    }
  }, 1000);
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  seconds = 25 * 60;
  updateDisplay();
});

updateDisplay();
