const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
  // The fetch URL was assigned to a variable ('imageUrl') first as TypeScript plugin(?) of VS Code was flagging the two forward slashes ('//') of the URL.
  const imageUrl = `https://picsum.photos/v2/list?limit=100`;
  const res = await fetch(imageUrl);
  const images = await res.json();
  console.log(images);
};

getImage();
