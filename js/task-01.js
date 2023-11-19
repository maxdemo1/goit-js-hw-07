const categoriesList = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesList.children.length}`);
const categoriesItem = categoriesList.querySelectorAll('.item');
// const headingOfCategory = () => {
//   for (const item of categoriesItem) {
//     console.log(`Category: ${item.firstElementChild.textContent}`);
//     console.log(`Elements: ${item.lastElementChild.children.length}`);
//   }
// };
// headingOfCategory();
categoriesItem.forEach(function (item) {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
