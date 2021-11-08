const images = ["image1.png", "image2.png", "image3.png", "image4.png"];
const slider = document.querySelector('#slider');


const buttonRight = document.getElementById('right');
const buttonLeft = document.getElementById('left');
const img = document.getElementById('img');


var imgIndex = 0;
img.src = `./images/${images[imgIndex]}`;

let firdavs = () => {
  if (imgIndex == images.length - 1) {
    imgIndex = 0;
  } else {
    imgIndex++;
  }
  img.src = `./images/${images[imgIndex]}`;
}

let talgat = () => {
  if (imgIndex == 0) {
    imgIndex = images.length - 1;
  } else {
    imgIndex--;
  }
  img.src = `./images/${images[imgIndex]}`;
}

buttonRight.addEventListener('click', firdavs);
buttonLeft.addEventListener('click', talgat);





