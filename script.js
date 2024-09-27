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
// Получаем все кнопки, которые открывают pop-up, и все pop-up окна
const gameButtons = document.querySelectorAll('.game[data-popup]');
const popups = document.querySelectorAll('.popup');
let currentPopup = null; // Хранит текущее открытое окно

// Обработчик для кнопок игр
gameButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Закрываем текущее pop-up окно, если оно открыто
    if (currentPopup) {
      currentPopup.style.display = 'none';
    }

    // Получаем id pop-up окна, связанного с кнопкой
    const popupId = button.getAttribute('data-popup');
    const popup = document.getElementById(popupId);

    // Показ нового pop-up
    if (popup) {
      popup.style.display = 'block';
      currentPopup = popup; // Обновление текущего открытого окна
    }
  });
});

// Обработчик для закрытия всех pop-up окон
popups.forEach(popup => {
  const closeBtn = popup.querySelector('.close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
      currentPopup = null; // Сбрасываем текущее окно
    });
  }
});

// Закрытие pop-up окна при клике на область вне окна
window.addEventListener('click', (event) => {
  if (event.target.classList.contains('popup')) {
    event.target.style.display = 'none';
    currentPopup = null;
  }
});
