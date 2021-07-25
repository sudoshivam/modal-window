'use strict';
// Save all required elements into variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal'); // Select all button elements with .show-modal class in a node-list (similar to array)
// Functions for opening and closing modal-window
const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const closeModal =  function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
// Set actions for all show-modal buttons
for (let i = 0; i < btnOpenModal.length; i++) {
btnOpenModal[i].addEventListener('click', openModal);
}
// Set action for closing modal button
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
// Set action for esc key pressing
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});