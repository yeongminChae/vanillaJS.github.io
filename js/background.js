const images = [
  "1.png",
  "2.png",
  "3.png",
  "3.png",
  "3.png",
  "3.png",
  "3.png",
  "3.png",
  "3.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// console.log(chosenImage);
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
