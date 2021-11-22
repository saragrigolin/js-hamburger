/* Hamburger menu:
mostrare / nascondere il menu principale
(per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile). */

// creo variabile per icona hamburger menu
const elementHamburger = document.querySelector('.fa-bars');
console.log(elementHamburger);

// creo variabile per il div hamburger menu
const hamburgerMenu = document.querySelector('.hamburger-menu');

// al click dell'icona, l'hamburger menu diventa display block
elementHamburger.addEventListener('click', function () {
    hamburgerMenu.style.display = 'block';
})

//creo variabile per icona chiusura hamburger menu
const elementClose = document.querySelector('.fa-times');
console.log(elementClose);

//al click dell'icona, l'hamburger menu diventa display none
elementClose.addEventListener('click', function () {
    hamburgerMenu.style.display = 'none';
})

//Far cambiare colore ad un altro elemento usando JS: cambio colore al bottone "Iscriviti" quando premo su "Scopri il corso"
const subscribeButton = document.querySelector('.cta');
console.log(subscribeButton);

const corso = document.querySelector('.corso');
console.log(corso);

corso.addEventListener('click', function () {
    subscribeButton.style.backgroundColor = 'blue';
})