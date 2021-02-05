const button = document.getElementById("button");
const image = document.getElementById("dice");
const score = document.getElementById("score")
const win = document.getElementById("win");
const lose = document.getElementById("lose");
const restart = document.getElementById("reset");

let runningScore = 0;

const reset = () => {
    score.textContent = 0;
    button.style.display = "inline-block";
    image.style.visibility = "hidden";
    win.style.display = "none";
    lose.style.display = "none";
}

image.style.visibility = "hidden";
win.style.display = "none";
lose.style.display = "none";

button.addEventListener("click", () => {
    let press = Math.ceil(Math.random() * 6);
    console.log(press);

    image.style.visibility = "visible";

    if (press === 1) {
        image.src = "./img/dice1.png";
        lose.style.display = "block"; 
        button.style.display = "none";
        runningScore = 0; 
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
        runningScore = 0;
    } 
})

restart.addEventListener("click", () => {
    reset()
})
