//document.body.style.backgroundColor = "rgb(219, 215, 197)";

let btn = document.querySelector("#btn");
let container = document.querySelector(".container");
let h4 = document.createElement("h4");
h4.className += "randomNumber";

randomColors = () => {
  // rgb(r,g,b) --> set color
  let r = Math.floor(Math.random() * 255 + 1);
  let g = Math.floor(Math.random() * 255 + 1);
  let b = Math.floor(Math.random() * 255 + 1);

  return `rgb(${r},${b},${g})`;
};
btn.addEventListener("click", () => {
  let random = randomColors();
  document.body.style.backgroundColor = random;
  container.style.color = randomColors();
  h4.innerText = randomColors();
});
container.appendChild(h4);
