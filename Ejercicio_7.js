/* Crea una función que retorne los campos de un objeto que equivalgan a un valor 'falsy' después de ser ejecutados
por una función especifica.

La función debe ener dos parámetros:

    - Primer parámetro en un objeto con x numero de campos y valores.
    - Segundo parámetro en una función que retorne un booleano, que se tiene que aplicar al objeto del primer
    parámetro. */

function returnFalsyValues(obj, func) {
  const falsyObj = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const val = obj[key];
      if (func(val) === false) {
        falsyObj[key] = val;
      }
    }
  }
  return falsyObj;
} /* Primero recorrí cada campo del objeto con 'for in' y aplico la función con el valor correspondiente,
si el resultado de la función  es 'false' el valor será añadido al objeto 'falsyObj' y por último la función
devuelve 'falsyObj' con todos los valores añadidos. */

const result = returnFalsyValues(
  { a: 1, b: "2", c: 3 },
  (x) => typeof x === "string"
);

console.log(result); // {a: 1, c: 3}
