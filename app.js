const slides = document.querySelectorAll(".slide");

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    const allowAddActiveClass = !slide.classList.contains("active");

    clearActiveClasses();
    if (allowAddActiveClass) {
      slide.classList.add("active");
    }
  });
});

function clearActiveClasses() {
  slides.forEach((slide) => slide.classList.remove("active"));
}
