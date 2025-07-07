document.querySelector(".burger").addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.header__navigation').classList.toggle('open');
  document.body.classList.toggle("scroll__block");
})