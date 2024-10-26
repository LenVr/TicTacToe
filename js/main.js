import { p } from "./librerias/html.js";

let clicked = false;
let boxes = document.querySelectorAll('.box');
let turnTitle = document.getElementById('turnTitle');
let restart = document.getElementById('restartBtn');

/* Indentify turn */

boxes.forEach(element => {
    element.addEventListener('click', (event) => {
        if (element.innerHTML === '') {
            if (!clicked) {
                clicked = true
                turnTitle.textContent = '';
                turnTitle.textContent = 'Es turno del jugador 2';
            } else {
                clicked = false
                turnTitle.textContent = '';
                turnTitle.textContent = 'Es turno del jugador 1';
            }
            write(element, event);
        }
    });
});

/* Write in the box */


function write(element, event) {
    const index = Array.from(boxes).indexOf(event.currentTarget);
    if (element.innerHTML === '') {
        if (index === index && clicked === false) {
            p(element, { className: 'mark', textContent: 'X' })
        } else if (index === index && clicked === true) {
            p(element, { className: 'mark', textContent: '0' })
        }
    }
}

/* Restart button */

restart.addEventListener('click', () => {
    let getMark = document.querySelectorAll('.mark');
    getMark.forEach(mark => {
        mark.remove()
        clicked = false;
        turnTitle.textContent = 'Es turno del jugador 1';
    });
})