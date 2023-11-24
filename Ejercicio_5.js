/* Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales con unos nuevos parametros que sean
'city' y 'isSpain'. El valor de 'isSpain' será un booleano indicando di es una ciudad de España. */

const arrCities2 = [
  { city: "Logroño", country: "Spain", capital: false },
  { city: "Bordeaux", country: "France", capital: false },
  { city: "Madrid", country: "Spain", capital: true },
  { city: "Florence", country: "Italy", capital: true },
  { city: "Oslo", country: "Norway", capital: true },
  { city: "Jaén", country: "Spain", capital: false },
];

const citiesNotCapitals = arrCities2.filter(
  (city) => city.country === "Spain" && city.capital === false
); /* Primero filtré todas las ciudades que no son capitades de España en una nueva array 'citiesNotCapitals'. */

for (let i = 0; i < citiesNotCapitals.length; i++) {
  delete citiesNotCapitals[i].country;
  delete citiesNotCapitals[i].capital;
  citiesNotCapitals[i].isSpain = true;
} /* Después utilicé un ciclo 'for' para eliminar los valores 'country' y 'capital' para luego añadir el valor
'isSpain'. */

console.log(citiesNotCapitals);
