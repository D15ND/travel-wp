const sliderCard = Array.from(document.querySelectorAll('.slider__card'));
const swipeCard = Array.from(document.querySelectorAll('.slider__icon'));
let activeSlide = 1;
let activeSwipe = 1;

const rightArrow = document.querySelector('.slider__arrow-right');
const leftArrow = document.querySelector('.slider__arrow-left');

swipeCard[activeSwipe].classList.add('bg__orange');


function nextCard() {
  activeSlide += 1;
  activeSwipe += 1;

  if (activeSlide === 2 && (activeSlide <= sliderCard.length)) {
    swipeCard[activeSwipe].classList.add('bg__orange');
    swipeCard[activeSwipe - 1].classList.remove('bg__orange');
    sliderCard[activeSlide].style.display = "flex";
    sliderCard[1].style.display = "none";
    sliderCard[0].style.display = "none";
  } else if (activeSlide === 1) {
    swipeCard[activeSwipe].classList.add('bg__orange');
    swipeCard[activeSwipe - 1].classList.remove('bg__orange');
    swipeCard[activeSwipe + 1].classList.remove('bg__orange');
    sliderCard[activeSlide].style.display = "flex";
    sliderCard[2].style.display = "none";
    sliderCard[0].style.display = "none";
  } else if (activeSlide === 0 && (activeSlide >= 0)) {
    swipeCard[activeSwipe].classList.add('bg__orange');
    swipeCard[activeSwipe + 1].classList.remove('bg__orange');
    sliderCard[activeSlide].style.display = "flex";
    sliderCard[1].style.display = "none";
    sliderCard[2].style.display = "none";
  }
}

function beforeCard() {
  activeSlide -= 1;
  activeSwipe -= 1;

  if (activeSlide === 2 && (activeSlide <= sliderCard.length)) {
    swipeCard[activeSwipe].classList.add('bg__orange');
    swipeCard[activeSwipe - 1].classList.remove('bg__orange');
    sliderCard[activeSlide].style.display = "flex";
    sliderCard[1].style.display = "none";
    sliderCard[0].style.display = "none";
  } else if (activeSlide === 1) {
    swipeCard[activeSwipe].classList.add('bg__orange');
    swipeCard[activeSwipe - 1].classList.remove('bg__orange');
    swipeCard[activeSwipe + 1].classList.remove('bg__orange');
    sliderCard[activeSlide].style.display = "flex";
    sliderCard[2].style.display = "none";
    sliderCard[0].style.display = "none";
  } else if (activeSlide === 0 && (activeSlide >= 0)) {
    swipeCard[activeSwipe].classList.add('bg__orange');
    swipeCard[activeSwipe + 1].classList.remove('bg__orange');
    sliderCard[activeSlide].style.display = "flex";
    sliderCard[1].style.display = "none";
    sliderCard[2].style.display = "none";
  }
}

rightArrow.addEventListener('click', nextCard);
leftArrow.addEventListener('click', beforeCard);