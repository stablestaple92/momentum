const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.png", "5.png", "6.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.id = "bgImg";
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);