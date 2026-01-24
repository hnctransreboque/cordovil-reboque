const slides = document.querySelectorAll("#carousel img");
let index = 0;
let startX = 0;

// Função para mostrar slide
function showSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

// Auto play
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 4000);

// Touch (celular)
const carousel = document.getElementById("carousel");

carousel.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) {
    index = (index + 1) % slides.length;
  } else if (endX - startX > 50) {
    index = (index - 1 + slides.length) % slides.length;
  }

  showSlide(index);
});

// Mouse (desktop)
let mouseDown = false;
let mouseStartX = 0;

carousel.addEventListener("mousedown", e => {
  mouseDown = true;
  mouseStartX = e.clientX;
});

carousel.addEventListener("mouseup", e => {
  if (!mouseDown) return;
  mouseDown = false;

  let mouseEndX = e.clientX;

  if (mouseStartX - mouseEndX > 50) {
    index = (index + 1) % slides.length;
  } else if (mouseEndX - mouseStartX > 50) {
    index = (index - 1 + slides.length) % slides.length;
  }

  showSlide(index);
});
