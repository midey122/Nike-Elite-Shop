document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".image-slider");
  const totalSlides = slides.length;
  let currentSlide = 0;

  function updateSliderPosition() {
    const offset = -currentSlide * 100;
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${offset}%)`;
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSliderPosition();
  }

  // Initially set the position of the slides
  updateSliderPosition();

  // Change slide every 3 seconds (3000 ms)
  setInterval(nextSlide, 3000);
});
