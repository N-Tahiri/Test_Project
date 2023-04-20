// loading elements
const badge = document.querySelector(".badge");
const title = document.querySelector(".title");
const colorCode = document.querySelector(".colorCode");

// Events
badge.addEventListener("click", () => {
  title.style.color = getRandomColor();
});

// Functions
// generate a random number based on the given range [min ... max]
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// generate a random color
function getRandomColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[getRandomNumber(0, 15)];
  }
  console.log("Color's code:", color);
  colorCode.textContent = color;
  return color;
}
