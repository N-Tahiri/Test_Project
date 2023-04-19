const badge = document.querySelector(".badge");
const title = document.querySelector(".title");
const colorCode = document.querySelector(".colorCode");

badge.addEventListener("click", () => {
  title.style.color = getRandomColor();
});

// generate random color
function getRandomNumber() {
  return Math.floor(Math.random() * 16);
}

function getRandomColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[getRandomNumber()];
  }
  console.log(color);
  colorCode.textContent = color;
  return color;
}
