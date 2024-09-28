// Получаем все кнопки, которые открывают pop-up, и все pop-up окна
const gameButtons = document.querySelectorAll('.game[data-popup]');
const popups = document.querySelectorAll('.popup');
let currentPopup = null; // Хранит текущее открытое окно

// Обработчик для кнопок игр
gameButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Закрываем текущее pop-up окно, если оно открыто
    if (currentPopup) {
      currentPopup.classList.remove('show');
      setTimeout(() => {
        currentPopup.style.display = 'none';
      }, 300); // Ждем 300ms перед скрытием окна
    }

    // Получаем id pop-up окна, связанного с кнопкой
    const popupId = button.getAttribute('data-popup');
    const popup = document.getElementById(popupId);

    // Показ нового pop-up
    if (popup) {
      popup.style.display = 'block';
      setTimeout(() => {
        popup.classList.add('show');
      }, 10); // Небольшая задержка перед добавлением класса show для анимации
      currentPopup = popup; // Обновление текущего открытого окна
    }
  });
});

// Обработчик для закрытия всех pop-up окон
popups.forEach(popup => {
  const closeBtn = popup.querySelector('.close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      popup.classList.remove('show');
      setTimeout(() => {
        popup.style.display = 'none';
      }, 300);
      currentPopup = null; // Сбрасываем текущее окно
    });
  }
});

// Закрытие pop-up окна при клике на область вне окна
window.addEventListener('click', (event) => {
  if (event.target.classList.contains('popup')) {
    event.target.classList.remove('show');
    setTimeout(() => {
      event.target.style.display = 'none';
    }, 300);
    currentPopup = null;
  }
});
// Получаем все кнопки, которые открывают pop-up окна
const game = document.querySelectorAll('.game-button');
// Получаем все pop-up окна
const popup = document.querySelectorAll('.popup');

// Переменная для хранения текущего открытого pop-up окна
let activePopup = null;

// Обработчик для кнопок, которые открывают pop-up окна
gameButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Закрываем текущее pop-up окно, если оно открыто
    if (currentPopup) {
      currentPopup.style.display = 'none';
      currentPopup.classList.remove('active'); // Удаление класса "active" у предыдущего окна
    }

    // Получаем id pop-up окна, связанного с кнопкой
    const popupId = button.getAttribute('data-popup');
    const popup = document.getElementById(popupId);

    // Показ нового pop-up окна
    if (popup) {
      popup.style.display = 'block';
      popup.classList.add('active'); // Добавляем класс "active" к текущему окну
      currentPopup = popup; // Обновляем текущее открытое окно
    }
  });
});

// Обработчик для закрытия всех pop-up окон при нажатии на кнопку закрытия
popups.forEach(popup => {
  const closeBtn = popup.querySelector('.close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
      popup.classList.remove('active'); // Удаляем класс "active" при закрытии
      currentPopup = null; // Сбрасываем текущее окно
    });
  }
});

// Закрытие pop-up окна при клике на область вне окна
window.addEventListener('click', (event) => {
  if (event.target.classList.contains('popup')) {
    event.target.style.display = 'none';
    event.target.classList.remove('active'); // Удаляем класс "active" при клике вне окна
    currentPopup = null;
  }
});
