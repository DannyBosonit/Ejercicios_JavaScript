/* Crea una función que redondee un numero float a un numero especifico de decimales.
La función debe tener dos parametros: 

    - Primer parametro es el numero float con x decimales.
    - Segundo parametro es un int que indique el numero de decimales al que redondear.
    - Evitar el metodo toFixed()
*/

function roundTo(a, b) {
  const factor = Math.pow(10, b);
  return Math.round(a * factor) / factor;
} /* La función 'roundTo' ajusta los decimales del float 'a' multiplicandolo por un factor que depende de el limite
de decimales 'b', luego lo redondea con 'Math.round()' y por último lo divide por ese mismo factor. */

const roundedResult = roundTo(2.123, 2);
console.log(roundedResult); // 2.12

const roundedResult2 = roundTo(1.123456789, 6);
console.log(roundedResult2); // 1.123457
