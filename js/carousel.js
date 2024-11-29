let currentIndex = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  slides[currentIndex].classList.add('active');

  const container = document.querySelector('.carousel-container');
  container.style.transform = `translateX(-${currentIndex * 100}%)`;}