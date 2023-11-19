function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const numberOfDiv = document.querySelector('#controls').firstElementChild;
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const targetBox = document.querySelector('#boxes');
createButton.addEventListener('click', () => {
  let addedDivs = '';
  if (numberOfDiv.value >= 1 && numberOfDiv.value <= 100) {
    targetBox.innerHTML = '';
    let count = 1;
    let width = 30;
    let height = 30;
    while (count <= numberOfDiv.value) {
      addedDivs += `<div style="width: ${width}px; height: ${height}px;
       background-color: ${getRandomHexColor()}"></div>`;
      width += 10;
      height += 10;
      count += 1;
    }

    console.log(addedDivs);
    numberOfDiv.value = '';
  }

  targetBox.insertAdjacentHTML('afterbegin', addedDivs);
});

destroyButton.addEventListener('click', () => {
  targetBox.innerHTML = '';
});
