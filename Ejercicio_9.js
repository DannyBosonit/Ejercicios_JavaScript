/* Crea una función que a partir de un objeto de entrada, retorne un objeto asegurandose que las claves del
objeto estén en lowercase.

La función debe tener un objeto como unico parámetro.*/

function toLowercaseKeys(obj) {
  const newObj = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const lowCaseKey = key.toLowerCase();
      newObj[lowCaseKey] = obj[key];
    }
  }
  return newObj;
} /* Primero creé un nuevo objeto 'newObj' y uso un 'for in' para recorrer el objeto de entrada 'obj',
después verifico las propiedades del objeto con una condicion, tranformo las claves del objeto a minusculas con
'toLowerCase()' y las añado al nuevo objeto 'newObj' y lo retorno. */

const myObject = { NamE: "Charles", ADDress: "Home Street" };
const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }
