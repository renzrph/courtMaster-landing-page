document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const container = document.querySelector(".carousel-container");
  const items = document.querySelectorAll(".carousel-item");

  let currentIndex = 0;
  const totalItems = items.length;
  const intervalTime = 3000;

  function showItem(index) {
    if (index < 0) {
      index = totalItems - 1;
    } else if (index >= totalItems) {
      index = 0;
    }
    container.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
  }

  function slide() {
    showItem(currentIndex + 1);
  }

  setInterval(slide, intervalTime);
});
