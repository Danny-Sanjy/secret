document.addEventListener("DOMContentLoaded", () => {
  const area = document.getElementById("gameArea");
  const modal = document.getElementById("gameModal");

  const heartsCount = 8;
  const specialIndex = Math.floor(Math.random() * heartsCount);

  for (let i = 0; i < heartsCount; i++) {
    const heart = document.createElement("div");
    heart.className = "game-heart";
    heart.textContent = "❤️";

    heart.style.left = Math.random() * 90 + "%";
    heart.style.animationDelay = Math.random() * 3 + "s";

    heart.addEventListener("click", () => {
      if (i === specialIndex) {
        modal.style.display = "flex";
      } else {
        heart.style.opacity = "0.3";
      }
    });

    area.appendChild(heart);
  }

  window.closeGame = () => {
    modal.style.display = "none";
  };
});
