// Dado tres arrays de numeros, sacar en un nuevo array la intersección de estos.

const arrNumber1 = [1, 2, 3];
const arrNumber2 = [1, 2, 3, 4, 5];
const arrNumber3 = [1, 4, 7, 2];

const interseccion = arrNumber1.filter(
  (i) => arrNumber2.includes(i) && arrNumber3.includes(i)
);
/* Utilicé el metodo filter sobre 'arrNumber1' para crear un nuevo array que cumpla con la condición de que
el número 'i' esté en los demás arrays. */

console.log(interseccion);
