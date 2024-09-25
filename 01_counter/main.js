const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const incrementBtn = document.getElementById("increment");
const countElement = document.getElementById("count");

let count = 0;

// function decrement(){
//     console.log("k")
// }

function updateCount() {
    countElement.textContent = count;
}

decrementBtn.addEventListener("click", () => {
    count--;
    updateCount();
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateCount();
});

incrementBtn.addEventListener("click", () => {
    count++;
    updateCount();
});
