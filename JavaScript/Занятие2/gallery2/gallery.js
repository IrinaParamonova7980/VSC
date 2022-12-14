let slideIndex = 1;

showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function forward() {
  showSlides((slideIndex += 1));
}

function backward() {
  showSlides((slideIndex -= 1));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("catImage");
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let slide of slides) {
    slide.style.display = "none";
    slides[slideIndex - 1].style.display = "block";
  }
}
