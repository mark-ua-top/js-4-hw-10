let interval5 = document.querySelector(".interval5");
let i = 1;

let interval = setInterval(() => {
  interval5.innerHTML = i + " інтервал";
  i++;
  if (i > 5) {
    clearInterval(interval);
  }
}, 1000);
