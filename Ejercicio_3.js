// Dado un array de ciudades, sacar todas las ciudades de España que no sean capitales.

const arrCities = [
  { city: "Logroño", country: "Spain", capital: false },
  { city: "Paris", country: "France", capital: true },
  { city: "Madrid", country: "Spain", capital: true },
  { city: "Rome", country: "Italy", capital: true },
  { city: "Oslo", country: "Norway", capital: true },
  { city: "Jaén", country: "Spain", capital: false },
];

for (let i = 0; i < arrCities.length; i++) {
  if (arrCities[i].country === "Spain" && arrCities[i].capital === false) {
    arrCities.splice(i, 1);
  }
} /* Creé un ciclo 'for' para poder iterar en cada objeto dentro de 'arrCities', después declaré una condición para
eliminar las ciudades cuyo país sea España pero que el valos de 'capital' fuera 'false'. */

console.log(arrCities);
