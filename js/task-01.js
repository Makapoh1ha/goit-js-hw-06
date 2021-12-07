const catUl = Array.from(document.querySelectorAll("ul#categories>li.item"));
console.log(`Number of categories: ${catUl.length}`);
const items = document.querySelectorAll('.item');
items.forEach((element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemLength = element.querySelectorAll('li').length;
    console.log(`Category: ${title} / Elements: ${itemLength}`);
});