console.log("Hello World :)")


const button = document.getElementById("color-button");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  fetch("../colors.json")
    .then((response) => response.json())
    .then((colors) => {
        console.log(colors.colors[Math.floor(Math.random() * colors.colors.length)].hex);
      const randomColor = colors.colors[Math.floor(Math.random() * colors.colors.length)].hex;
      body.style.backgroundColor = randomColor;
    });
});
