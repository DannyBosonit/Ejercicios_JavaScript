/* Crea una función que convierta un numero de bytes en un formato con valores legibles
('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB','YB').

la función debe tener 2 parámetros:

    - Primer parámetro debe ser el número de bytes.
    - Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado
    (esto se puede hacer con Number.prototype.toPrecision()). Por defecto, este parámetro debe tener un valor de 3. */

function fromBytesToFormattedSizeUnits(bytes, precision = 3) {
  const sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let sizeInd = 0;
  let size = bytes;

  if (size < 0) {
    size = size * -1;
  }

  while (size >= 1000 && sizeInd < sizes.length - 1) {
    size /= 1000;
    sizeInd++;
  }

  if (bytes < 0) {
    return "-" + size.toPrecision(precision) + sizes[sizeInd];
  } else {
    return size.toPrecision(precision) + sizes[sizeInd];
  }
} /* Primero definí los tamaños de bytes en un array 'sizes' con su respectivo indice 'sizeInd', luego igualé el valor
'bytes' a la variable size e inicié un 'while' para dividir 'size' por 1000 hasta que el resultado sea menor a 1000 y
por ultimo lo retorné con el metodo 'toPrecision()' para especificar la cantidad de digitos que devuelve la función. */

const result1 = fromBytesToFormattedSizeUnits(1000);
console.log(result1); // 1KB

const result2 = fromBytesToFormattedSizeUnits(123456789);
console.log(result2); // 123MB

const result3 = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result3); // -12.145GB
