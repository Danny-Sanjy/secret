const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeModal = document.getElementById('closeModal');

galleryItems.forEach(item => {
  let timer;
  let isHovered = false;

  // Эффект при задержке > 3.4 сек (мышь)
  item.addEventListener('mouseenter', () => {
    timer = setTimeout(() => {
      item.classList.add('hovered');
      isHovered = true;
    }, 3400);
  });

  item.addEventListener('mouseleave', () => {
    clearTimeout(timer);
    item.classList.remove('hovered');
    isHovered = false;
  });

  // Для сенсорных устройств (тач)
  item.addEventListener('touchstart', () => {
    timer = setTimeout(() => {
      item.classList.add('hovered');
      isHovered = true;
    }, 3400);
  });

  item.addEventListener('touchend', () => {
    clearTimeout(timer);
    // Небольшая задержка перед удалением эффекта на мобильных
    setTimeout(() => {
      item.classList.remove('hovered');
      isHovered = false;
    }, 300);
  });

  // Открытие модального окна
  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').src;
    if (imgSrc) {
      modal.style.display = 'block';
      modalImg.src = imgSrc;
      // Блокируем скролл body когда модалка открыта
      document.body.style.overflow = 'hidden';
    }
  });
});

// Закрытие модального окна
function closeModalWindow() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  // Небольшая анимация исчезновения
  modalImg.style.animation = 'none';
}

closeModal.addEventListener('click', closeModalWindow);

// Закрытие при клике вне фото
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModalWindow();
  }
});

// Закрытие по клавише Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.style.display === 'block') {
    closeModalWindow();
  }
});

// Предзагрузка изображений для плавности
galleryItems.forEach(item => {
  const img = item.querySelector('img');
  if (img && img.src) {
    const preloadImg = new Image();
    preloadImg.src = img.src;
  }
});