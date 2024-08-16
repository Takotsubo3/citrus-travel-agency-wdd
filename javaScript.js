function changeImage(x, image) {
  const images = [
    "images/notreDameEdited.png",
    "images/notreDame.jpg",
    "images/bnfEdited.png",
    "images/bnf.jpg",
    "images/louvreEdited.png",
    "images/louvre.jpg",
    "images/arcdetriompheEdited.png",
    "images/arcdetriomphe.jpg",
    "images/lambroisieEdited.png",
    "images/lambroisie.jpg",
  ];
}

let slideIndexes = [1, 1]; // Initialize an array to store the current slide index for each slideshow
let slideId = ["mySlides1", "mySlides2"]; // Array of slideshow identifiers

// Initialize the slideshows
for (let i = 0; i < slideIndexes.length; i++) {
  showSlides(1, i);
}

function plusSlides(n, no) {
  showSlides((slideIndexes[no] += n), no);
}

function showSlides(n, no) {
  let i;
  let slides = document.getElementsByClassName(slideId[no]);
  if (n > slides.length) {
    slideIndexes[no] = 1;
  }
  if (n < 1) {
    slideIndexes[no] = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexes[no] - 1].style.display = "block";
}
