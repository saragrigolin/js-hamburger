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
    hamburgerMenu.classList.add('active');
})

//creo variabile per icona chiusura hamburger menu
const elementClose = document.querySelector('.fa-times');
console.log(elementClose);

//al click dell'icona, l'hamburger menu diventa display none
elementClose.addEventListener('click', function () {
    hamburgerMenu.classList.remove('active');
})

//Far cambiare colore ad un altro elemento usando JS: cambio colore al bottone "Iscriviti" quando lo clicco
const subscribeButton = document.querySelector('.cta');
console.log(subscribeButton);

subscribeButton.addEventListener('click', function () {
    subscribeButton.style.backgroundColor = 'blue';
})

// Aggiungere un'altra voce al menu usando JS
const ul = document.querySelector("ul");
const li = document.createElement("li");
const a = document.createElement ("a");
a.href = "#";
a.append('Pippo');
li.append(a);
ul.prepend(li);
console.log(li);