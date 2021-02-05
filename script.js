const button = document.getElementById("button");
const image = document.getElementById("dice");
const score = document.getElementById("score")
const win = document.getElementById("win");
const lose = document.getElementById("lose");

let runningScore = 0;

image.style.display = "none";
win.style.display = "none";
lose.style.display = "none";

button.addEventListener("click", () => {
    let press = Math.ceil(Math.random() * 6);
    console.log(press);

    image.style.display = "flex";

    if (press === 1) {
        image.src = "./img/dice1.png";
        lose.style.display = "block"; 
    } else if (press === 2) {
        image.src =  "./img/dice2.png";
    } else if (press === 3) {
        image.src =  "./img/dice3.png";
    } else if (press === 4) {
        image.src =  "./img/dice4.png";
    } else if (press === 5) {
        image.src =  "./img/dice5.png";
    } else if (press === 6) {
        image.src =  "./img/dice6.png";
    }

    runningScore += press;
    
    score.textContent = runningScore;

    if (runningScore > 20) {
        win.style.display = "block";
    } 

})

