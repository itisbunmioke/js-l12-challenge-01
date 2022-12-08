const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
  // The fetch URL was assigned to a variable ('imageUrl') first as TypeScript plugin(?) of VS Code was flagging the two forward slashes ('//') of the URL.
  const imageUrl = `https://picsum.photos/v2/list?limit=100`;
  const res = await fetch(imageUrl);
  const images = await res.json();
//   console.log(images);
  selectRandomImage(images);
};

const selectRandomImage = function (images) {
  const randomIndex = Math.floor(Math.random() * images.length);
  console.log(randomIndex);
  const randomImage = images[randomIndex];
  console.log(randomImage);
  displayImage(randomImage);
};

const displayImage = function (randomImage) {
  const author = randomImage.author;
  const imageAddress = randomImage.download_url;
  authorSpan.innerText = author;
  img.src = imageAddress;
  imgDiv.classList.remove("hide");
};

button.addEventListener('click', () => {
    getImage();
})

// button.onclick = () => {
