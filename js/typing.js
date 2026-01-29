document.addEventListener("DOMContentLoaded", () => {
  const text =
    "Я не знаю, как правильно делать идеальные вещи. " +
    "Но я точно знаю, что всё, что я делаю для тебя — искренне. " +
    "Ты важна для меня. Люблю.";

  const element = document.getElementById("typingText");
  let index = 0;

  function type() {
    if (index < text.length) {
      element.textContent += text[index];
      index++;
      setTimeout(type, 55);
    }
  }

  type();
});
