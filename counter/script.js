var startTime = new Date().getTime();
var counter = document.querySelector(".counter");
var decrementButton = document.getElementById("decrement");
var incrementButton = document.getElementById("increment");
var countSpan = document.getElementById("count");

let count = 0;

decrementButton.addEventListener("click", () => {
  if (count == 0) {
    alert("You can't go below 0!");
    return;
  }
  count--;
  countSpan.textContent = count;
});

incrementButton.addEventListener("click", () => {
  count++;
  countSpan.textContent = count;
  if (count == 10) {
    var endTime = new Date().getTime();
    console.log();
    counter.innerHTML = `<h1>Congrats! It took you ${endTime - startTime}ms to reach 10!</h1>`;
  }
});
