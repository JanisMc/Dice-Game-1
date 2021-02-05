const button = document.getElementById("button");
const image = document.getElementById("dice");

image.style.display = "none";

button.addEventListener("click", () => {
    let press = Math.ceil(Math.random() * 6);
    console.log(press);

})
