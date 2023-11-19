function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorButton = document.querySelector('.change-color');
changeColorButton.addEventListener('click', () => {
  const body = document.querySelector('body');
  const colorName = document.querySelector('.color');
  body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = body.style.backgroundColor;
});
