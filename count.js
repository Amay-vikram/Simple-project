let count = 0;
const maxCount = 999;

const counterElem = document.getElementById("counter");
const addBtn = document.getElementById("addBtn");
const resetBtn = document.getElementById("resetBtn");

addBtn.addEventListener("click", () => {
    if (count < maxCount) {
        count++;
        updateCounter();
    }
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateCounter();
});

function updateCounter() {
    counterElem.textContent = count;
}