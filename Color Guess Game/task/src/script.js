const rgbColor = document.getElementById("rgb-color");
const statusText = document.getElementById("status");
const restartButton = document.getElementById("restart");
const colorBlocks = document.querySelectorAll(".color-block");

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function setRandomColor() {
    const correctColor = generateRandomColor();
    rgbColor.textContent = correctColor.toUpperCase();

    const correctIndex = Math.floor(Math.random() * colorBlocks.length);

    colorBlocks.forEach((block, index) => {
        block.style.display = "inline-block";
        if (index === correctIndex) {
            block.style.backgroundColor = correctColor;
        } else {
            block.style.backgroundColor = generateRandomColor();
        }
    });

    statusText.textContent = "Start Guessing!";
}

function checkColor(event) {
    const clickedColor = event.target.style.backgroundColor;
    if (clickedColor === rgbColor.textContent.toLowerCase()) {
        statusText.textContent = "Correct!";
        colorBlocks.forEach(block => {
            block.style.backgroundColor = clickedColor;
        });
    } else {
        statusText.textContent = "Try Again!";
        event.target.style.display = "none";
    }
}

setRandomColor();

restartButton.addEventListener("click", setRandomColor);

colorBlocks.forEach(block => {
    block.addEventListener("click", checkColor);
});
