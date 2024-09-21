const carouselScreen = document.getElementById('carousel-screen');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const totalSlides = dots.length;

function updateCarousel(index) {
  // Обновление позиции экрана карусели
  const offset = -index * 250; // смещение карусели
  carouselScreen.style.transform = `translateX(${offset}px)`;

  // Обновление активного индикатора (точки)
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

document.querySelector('.arrow-left').addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
  updateCarousel(currentIndex);
});

document.querySelector('.arrow-right').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel(currentIndex);
});
 