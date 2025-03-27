//slider for review
let index = 0;
const totalReviews = 12;
const reviews = document.querySelector(".reviews");

function showReview() {
  reviews.style.transform = `translateX(-${index * 100}%)`;
}

function nextReview() {
  index = (index + 1) % totalReviews; // Loops back to first review
  showReview();
}

function prevReview() {
  index = (index - 1 + totalReviews) % totalReviews; // Loops back to last review
  showReview();
}
setInterval(nextReview, 5000);

let indes = 0;
const totalSlides = 5;
const slider = document.querySelector(".slider");

function showSlide() {
  slider.style.transform = `translateX(-${indes * 100}%)`;
}

function nextSlide() {
  indes = (indes + 1) % totalSlides; // Loops back to first slide
  showSlide();
}

function prevSlide() {
  indes = (indes - 1 + totalSlides) % totalSlides; // Loops back to last slide
  showSlide();
}
setInterval(nextSlide, 5000); // Auto-slide every 5s
