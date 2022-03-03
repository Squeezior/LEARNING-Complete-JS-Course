'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener('click', openModal);
// btnsShowModal[i].addEventListener('click', function () {
//   console.log('Button clicked!');
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// });

// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// We needs to give a function a parameter, this time it's e - for event. Each time this Event happens JavaScript with call the function with the Event object as argument. It works because we don't call the function ourselves. - JS Calls this function when keydown is pressed, when it does so, it passes in the event object as an argument.

//keyup - lift finger off key, keypressed - fires continously when pressed, keydown - fired as soon as key is pressed
