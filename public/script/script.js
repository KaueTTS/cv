function downloadPDF() {
    window.print();
}

// -------- Skills Carousel --------
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carouselTrack");
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".carousel-dot");
  const prevBtn = document.getElementById("carouselPrev");
  const nextBtn = document.getElementById("carouselNext");

  if (!track || slides.length === 0) return;

  let current = 0;
  const total = slides.length;

  function goToSlide(index) {
    // Clamp index
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;

    current = index;

    // Move track
    track.style.transform = `translateX(-${current * 100}%)`;

    // Update active slide
    slides.forEach((s, i) => s.classList.toggle("active", i === current));

    // Update dots
    dots.forEach((d, i) => d.classList.toggle("active", i === current));
  }

  prevBtn.addEventListener("click", () => goToSlide(current - 1));
  nextBtn.addEventListener("click", () => goToSlide(current + 1));

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      goToSlide(parseInt(dot.dataset.index, 10));
    });
  });

  // Swipe support for touch devices
  let startX = 0;
  let isDragging = false;

  track.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  }, { passive: true });

  track.addEventListener("touchend", (e) => {
    if (!isDragging) return;
    isDragging = false;
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goToSlide(current + 1) : goToSlide(current - 1);
    }
  }, { passive: true });

  // Keyboard navigation when carousel is focused
  const carousel = document.getElementById("skillsCarousel");
  carousel.setAttribute("tabindex", "0");
  carousel.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goToSlide(current - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goToSlide(current + 1);
    }
  });
});