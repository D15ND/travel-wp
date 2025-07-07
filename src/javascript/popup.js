const popup=document.querySelector(".popup__login");
const openModal=document.querySelector(".header__button");

function openModalAndBlockScroll() {
  popup.showModal();
  popup.style.display='flex';
  document.body.classList.add("scroll__block");
}

function returnScroll() {
  document.body.classList.remove("scroll__block");
}

function close () {
  popup.close();
  popup.style.display='none';
  returnScroll();
}

openModal.addEventListener('click', openModalAndBlockScroll);

function closeOnBackdropClick({ currentTarget, target }) {
  const popup=currentTarget;
  const isBackdropClick=target === popup;
  if (isBackdropClick) {
    close();
  }
}

popup.addEventListener('click', closeOnBackdropClick);
popup.addEventListener('cancel', () => {
  returnScroll();
  popup.style.display="none";
})