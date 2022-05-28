const incrBtn = document.querySelector("[data-action='increment']");
const decrBtn = document.querySelector("[data-action='decrement']");
const valueNum = document.querySelector("#value");
let counterValue = 0;
incrBtn.addEventListener("click", () => {
  valueNum.textContent = new Number(counterValue);
  counterValue += 1;
});
decrBtn.addEventListener("click", () => {
  valueNum.textContent = new Number(counterValue);
  counterValue -= 1;
});
