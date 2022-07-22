/* Iteración #1: Creando Events */

/* 1.1 */
/* Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click */

let body = document.querySelector("body");
let boton = document.createElement("button");
boton.id = "btnToClick";
body.appendChild(boton);
console.log(boton)

function clickEvent (event) {
    console.log(event)
    }

boton.onclick = clickEvent;

/* 1.2 */
/* Añade un evento 'focus' que ejecute un console.log con el valor del input. */

let focusItem = document.querySelector(".focus");
console.log(focusItem);

function focusEvent () {
    console.log(focusItem.value);
}

focusItem.onfocus = focusEvent;


/* 1.3 */
/* Añade un evento 'input' que ejecute un console.log con el valor del input. */

let inputEvent = document.querySelector(".value");
console.log(inputEvent);

function inputEventClick () {
    console.log(inputEvent.value)
}

inputEvent.oninput = inputEventClick;