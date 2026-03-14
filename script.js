const carrusel = document.getElementById('carrusel');
const tarjetas = document.querySelectorAll('.tarjeta');
const total = tarjetas.length;
let indice = 0;

function mover(direccion) {
    indice += direccion;
    if (indice < 0) indice = 0;
    if (indice > total - 4) indice = total - 4; // mostrar 4 a la vez
    carrusel.style.transform = `translateX(-${indice * 220}px)`; 
}

setInterval(() => {
    indice++;
    if (indice > total - 4) indice = 0;
    mover(0);
}, 3000);
