const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
const carousal = document.getElementById("carousal");
let currentSlide = 1;

btnPrev.addEventListener("click", () => {
  if (currentSlide !== 0) {
    carousal.style.transform = `translateX(-${100 * (currentSlide - 1)}%)`;
    carousal.style.transition = "transform .5s ease-in";
    --currentSlide;
    console.log(currentSlide);
  } else {
    carousal.style.transform = "translateX(-300%)";
    carousal.style.transition = "none";
    currentSlide = 3;
    console.log(currentSlide);
  }
});

btnNext.addEventListener("click", () => {
  if (currentSlide !== 4) {
    carousal.style.transform = `translateX(-${100 * currentSlide}%)`;
    carousal.style.transition = "transform .5s ease-in";
    ++currentSlide;
    console.log(currentSlide);
  } else {
    carousal.style.transform = "translateX(0)";
    carousal.style.transition = "none";
    currentSlide = 1;
    console.log(currentSlide);
  }
});
