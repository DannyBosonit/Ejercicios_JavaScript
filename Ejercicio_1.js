// Dado un array de objetos, obtener el objeto con el id = 3.

const arrNames = [
  { id: 1, name: "Pepe" },
  { id: 2, name: "Juan" },
  { id: 3, name: "Alba" },
  { id: 4, name: "Toby" },
  { id: 5, name: "Lala" },
];

const id_3 = arrNames.find(
  (obj) => obj.id === 3
); /* Usé la función 'find' para buscar el primer elemento dentro del array
cuyo id sea igual a 3. */
console.log(id_3);
