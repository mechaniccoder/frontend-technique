const images = document.querySelectorAll("img");

// scroll event를 활용한 lazy loading
window.addEventListener("scroll", () => {
  images.forEach((image) => {
    const rect = image.getBoundingClientRect();
    if (!image.src && rect.top < window.innerHeight * 1.3) {
      image.src = image.dataset.src;
    }
  });
});

// IntersectionObserver를 활용한 lazy loading
const ioOptions = { rootMargin: "300px" };
const io = new IntersectionObserver((entries, observer) => {
  console.log(entries);
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      const target = entry.target;
      if (!target.src) {
        target.src = target.dataset.src;
      }
    }
  });
}, ioOptions);
images.forEach((image) => io.observe(image));
