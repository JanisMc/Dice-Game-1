const button = document.getElementById("button");
const image = document.getElementById("dice");

image.style.display = "none";

button.addEventListener("click", () => {
    let press = Math.ceil(Math.random() * 6);
    console.log(press);
    
    image.style.display = "flex";

    if (press === 1) {
        image.src = "./img/dice1.png"; 
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
})
