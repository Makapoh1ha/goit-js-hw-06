const catUl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${catUl.length}`);
const items = document.querySelectorAll('.item');
items.forEach((element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemLength = element.querySelectorAll('li').length;
    console.log(`Category: ${title} / Elements: ${itemLength}`);
});




// const catUl = document.querySelectorAll("li.item");
// console.log(`Number of categories: ${catUl.length}`);

// const items = document.querySelectorAll('.item');
// items.forEach((element) => {
//     const title = element.querySelector('h2').innerHTML;
//     const itemLenght = element.querySelectorAll('li').length;
//     console.log(`Category: ${title} / Elements: ${itemLenght}`);
// });
h