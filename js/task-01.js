const numberOfCategories = document.querySelectorAll('.item');

console.log("Number of categories:", numberOfCategories.length);

numberOfCategories.forEach(el => {
    console.log("Category:", el.firstElementChild.textContent);
    console.log("Elements:", el.lastElementChild.children.length)
})