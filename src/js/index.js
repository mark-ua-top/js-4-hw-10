let interval5 = document.querySelector(".interval5");
let sniya = document.querySelector(".sniya");
let clickSniya = document.querySelector(".click-sniya");
let clickerCount = document.querySelector(".count");
let badge = document.querySelector(".badge");
const form = document.getElementById("sendTimer");
const input = document.getElementById("timer");

let i = 0;
let interval = setInterval(() => {
  interval5.innerHTML = i + " інтервал";
  i++;

  if (i > 5) {
    clearInterval(interval);
  }
}, 1000);


// task 2-3
let clickCount = 0;

let interval2 = setInterval(() => {
  let left = Math.random() * 100;
  let top = Math.random() * 100;
  clickSniya.style.left = left + "%";
  clickSniya.style.top = top + "%";
}, 1000);

clickSniya.addEventListener("click", () => {
  clickCount++;

  clickerCount.innerHTML = clickCount;

  if (clickCount >= 10) {
    clearInterval(interval2);
    clickSniya.style.left = "50%";
    clickSniya.style.top = "50%";
    badge.innerHTML = "Вітаю! Ти натиснув 10 разів на кота й отримав звання найшвидшої руки на Дикому Заході!";
  }
});
// task4

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const seconds = input.value

  if (isNaN(seconds) || seconds <= 0) {
    alert("Чеел введи нормальне число");
    return;
  }

  setTimeout(() => {
    alert(`Молодець! Ти витримав ${seconds} секунд!`);
  }, seconds * 1000);
});