// Seleccionar elementos del DOM
const boton = document.querySelector("button");
const color = document.getElementById("color");

function generarColorHexadecimalAleatorio() {
  let digitos = '0123456789ABCDEF';
  let colorHex = '#';

  for (let i = 0; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * digitos.length);
    colorHex += digitos[indiceAleatorio];
  }

  return colorHex;
}

boton.addEventListener('click', function () {
  let colorAleatorio = generarColorHexadecimalAleatorio();
  // Actualizar texto
  color.textContent = colorAleatorio;
  // Actualizar el color de fondo
  document.body.style.backgroundColor = colorAleatorio;
});
