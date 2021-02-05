const button = document.getElementById("button");

button.addEventListener("click", () => {
    let press = Math.ceil(Math.random() * 6);
    console.log(press);
})
