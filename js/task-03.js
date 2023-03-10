const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector(".gallery")

const makeMarkup = images.map(image => { 
  const liItem = document.createElement('li');
  const imgEl = document.createElement('img');
  imgEl.src = image.url;
  imgEl.alt = image.alt;
  imgEl.width = 600;
  liItem.append(imgEl);
  return liItem
})

console.log(makeMarkup)

galleryList.append(...makeMarkup)
// const makeMarkup = images.map((image) => `<li class = "list"><img class="photo" src = ${image.url} width = "600" alt="${image.alt}"></img></li>`).join("");


// galleryList.insertAdjacentHTML("beforeend", makeMarkup)

// galleryList.style.listStyle = "none";