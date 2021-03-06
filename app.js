// 1
const portillos = document.getElementById(`portillos`);
console.dir(portillos);

// 2
const images = document.getElementsByTagName(`img`);
console.dir(images);

// 3
const centered = document.getElementsByClassName(`center`);
console.dir(centered);

// 4
const ginosEast = document.querySelector(`#ginos`);
console.dir(ginosEast);

// 5
const pTags = document.querySelectorAll(`p`);
console.dir(pTags);

// 6a
const h1 = document.querySelector(`h1`);
console.dir(h1);

// 6b
const h1InnerText = h1.innerText;
h1.innerText = `Matt's Favorite Places To Eat In Sweet Home Chicago!`

// 7a
const others = document.querySelector(`#others`);
console.dir(others);

// 7b
others.innerHTML = `<h3>Other favorites</h3>`;

// 8a
const aTag = document.querySelector(`a`);
console.dir(aTag);

// 8b
aTag.href = `https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/`;

// 9
h1.classList.add(`text-color`, `background`);
console.log(h1.classList);

// 10
h1.classList.remove(`background`);

// 11a
const h4 = document.createElement(`h4`);

// 11b
h4.innerText = "CHICAGO: A great place to eat!";
console.dir(h4);

// 11c
const body = document.querySelector(`body`);
body.prepend(h4);

// 12a
const h5 = document.createElement(`h5`);

// 12b
h5.innerText = "See you in the Windy City Sometime!";
console.dir(h5);

// 12c

// 13



