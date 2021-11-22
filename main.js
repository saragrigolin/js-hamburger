/* Hamburger menu:
mostrare / nascondere il menu principale
(per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile). */

// creo variabile per icona hamburger menu
const elementHamburger = document.querySelector('.fa-bars');
console.log(elementHamburger);

// al click dell'icona, l'hamburger menu diventa display block
elementHamburger.addEventListener('click', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    hamburgerMenu.style.display = 'block';
})