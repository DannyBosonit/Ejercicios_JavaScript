/* Crea una función que elimine las etiquetas HTML o XML de un string.

La función debe tener un string como único parámetro. */

function removeHTMLTags(str) {
  return str.replace(/(<([^>]+)>)/gi, "");
} /* Esta función toma una expresión regular '/(<([^>]+)>)/gi' que es utilizada en el método '.replace()'
para reemplazar cualquier cadena que empiece con '<' y termine con '>' por '', los indicadores 'gi' se usan para que la
busqueda sea global y no se detenga ante la primera coincidencia. */

const result = removeHTMLTags(
  "<div><span>lorem</span> <strong>ipsum</strong></div>"
);

console.log(result); // lorem ipsum
