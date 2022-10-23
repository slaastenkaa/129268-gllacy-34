const modalButton = document.querySelectorAll('.modal-button');
const modalClose = document.querySelector('.modal-close');
const modalCloseButton = document.querySelector('.modal-close-button');

modalButton.forEach(element => element.addEventListener('click', event => {
  if (modalClose.classList.contains('modal-close')) {
    event.preventDefault();
    modalClose.classList.remove('modal-close');
  }
}));

modalClose.addEventListener('click', event => {
  if (event.target == modalClose && modalClose.classList.contains('modal-container')) {
    modalClose.classList.add('modal-close');
  }
});

modalCloseButton.addEventListener('click', () => {
    modalClose.classList.add('modal-close');
})

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    modalClose.classList.add('modal-close');
  }
});
