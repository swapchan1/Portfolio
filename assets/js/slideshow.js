var slideIndex = [1, 1, 1, 1];
var slideId = ["edu-assist-sketches", "edu-assist-lo-fi", "edu-assist-hi-fi", "amazon"]

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  var i;
  var slides = document.getElementsByClassName(slideId[no]);
  slideIndex[no] = n
  if (n > slides.length) { slideIndex[no] = 1 }
  if (n < 1) { slideIndex[no] = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex[no] - 1].style.display = "block";
}
