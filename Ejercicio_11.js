/* Crea una función que tome un array como parámetro y lo divida en arrays nuevos con tantos
elementos como sean especificados.

la función debe tener dos parámetros:

    - El primer parámetor es el array entero que se quiere dividir.
    - El segundo parámetro es el número de elementos que deben tener los arrays en los que se divida
    el array original del primer parámetro. */

function splitArrayIntoChunks(arr, num) {
  const newArr = [];

  for (let i = 0; i < arr.length; i += num) {
    let chunk = arr.slice(i, i + num);
    newArr.push(chunk);
  }

  return newArr;
}
/* Primero creo un nuevo array 'newArr' y luego inicio un ciclo 'for' para recorrer el array pasado como parámetro
y aumentando el indice 'i' por el parámetro 'num', dentro divido el array con el metodo '.slice()' utilizando el
indice 'i' i la operación 'i + num' para regresar los elementos que estén en ese rango, después los añado a 'newArr'
con el metodo 'push()' y retorno 'newArr' ya modificado. */

const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]
