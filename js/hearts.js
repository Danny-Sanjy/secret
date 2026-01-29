const scene = document.querySelector('.scene');

const heartsData = [
  { type: 'text', content: 'Я тебя люблю' },
  { type: 'text', content: 'Ты моя радость' },
  { type: 'text', content: 'Ты делаешь меня счастливым' },
  { type: 'text', content: 'С тобой спокойно и тепло' },
   { type: 'text', content: 'Люблю только тебя' },
    { type: 'text', content: 'Хочу чтоб была моей' },
     { type: 'text', content: 'ЧМОК//' },
      { type: 'text', content: 'ХеХеХехе, держи цветочек 🌹' },
       { type: 'text', content: 'С тобой спокойно и тепло' },
  { type: 'text', content: 'Ты самое дорогое' }
];

const heartClicks = new Map();

function createHeart(data) {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  // случайная позиция по ширине
  heart.style.left = Math.random() * (window.innerWidth - 300) + 'px';
  // случайная скорость падения
  const duration = 10 + Math.random() * 8; // 12-20 секунд
  heart.style.animation = `fall ${duration}s linear forwards`;  

  heartClicks.set(heart, 0);

  // клик по сердцу
  heart.addEventListener('click', () => {
    let count = heartClicks.get(heart);
    if (count >= 3) {
      heart.remove();
      return;
    }
    heartClicks.set(heart, count + 1);
    heart.classList.add('paused');

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');
    contentDiv.innerText = data.content;
    heart.appendChild(contentDiv);

    setTimeout(() => {
      heart.classList.remove('paused');
      heart.removeChild(contentDiv);
    }, 8000);
  });

  scene.appendChild(heart);

  // удаляем после окончания анимации
  heart.addEventListener('animationend', () => {
    heart.remove();
  });
}

// создаём новые сердца **с интервалом 0.8-2 секунды**, чтобы не падали все сразу
function startHearts() {
  setInterval(() => {
    if (scene.children.length < 12) { // максимум на экране 12сердец
      const data = heartsData[Math.floor(Math.random() * heartsData.length)];
      createHeart(data);
    }
  }, 800 + Math.random() * 1100);
}

startHearts();
