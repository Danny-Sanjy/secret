document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById('loveModal');
  const textBox = document.getElementById('loveText');

  document.querySelectorAll('.love-buttons button').forEach(btn => {
    btn.addEventListener('click', () => {
      textBox.textContent = btn.dataset.text;
      modal.style.display = 'flex';
    });
  });

  window.closeLove = function () {
    modal.style.display = 'none';
  };
});
