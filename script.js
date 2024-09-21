const carouselItems = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function updateCarousel(index) {
  carouselItems.forEach((item, i) => {
    item.classList.remove('active');
    item.style.opacity = '0'; // Начальная прозрачность
  });

  // Добавляем активный класс текущему элементу
  carouselItems[index].classList.add('active');
  carouselItems[index].style.opacity = '1'; // Прозрачность при показе
  carouselItems[index].style.transition = 'opacity 0.5s ease'; // Анимация прозрачности

  // Обновление активного индикатора (точки)
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

// Обработчики событий для кнопок
document.querySelector('.arrow-left').addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
  updateCarousel(currentIndex);
});

document.querySelector('.arrow-right').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel(currentIndex);
});

// Инициализация для первого слайда
updateCarousel(currentIndex);
