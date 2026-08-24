// 1) Definir una función que se llame Calculadora, que reciba un array de números, y una callback.
// A) Pasarle por argumento una función arrow que realice la suma de los elemtos del array.
// B) Pasarle por argumento una función arrow que realice la resta de los elementos del array.
// C) Pasarle por argumento una función arrow que realice la multiplicación de los elementos.

let suma = (numeros) => {
  let total = 0;
  numeros.forEach((numero) => {
    total += numero;
  });
  return total;
};
let resta = (numeros) => {
  let total = numeros[0];
  numeros.slice(1).forEach((numero) => {
    total -= numero;
  });
  return total;
};
let multiplicacion = (numeros) => {
  let total = 1;
  numeros.forEach((numero) => {
    total *= numero;
  });
  return total;
};

let calculadora = function (numeros, callback) {
  return callback(numeros);
};

// 2) Definir una función llamada agregarSiEstaEntreCeroYDiez, que reciba un número, y un array, la función debe validar si el número es mayor o igual a cero y menor o igual a 10, en caso favorable, debe agregarlo en la primera posición del array, caso contrario debe arrojar un error informando que el número es mayor o menor a lo establecido. Debe retornar el array con el resultado.

function agregarSiEstaEntreCeroYDiez(numero, arrayNumeros) {
  if (numero >= 0 && numero <= 10) {
    arrayNumeros.unshift(numero);
    return arrayNumeros;
  } else {
    throw new Error("El numero es mayor o menor a lo establecido");
  }
}

// 3) Definir una función similar a la del punto 2, pero que en vez de un número reciba un array con números y valide si cada uno de los elementos cumple con la condición de estar entre cero y diez, debe retornar un array con los números que cumplan la función.

function numerosQueEstanEntreCeroYDiez(numeros) {
  let arrayConNumerosQueCumplenLaFuncion = [];
  numeros.forEach((numero) => {
    if (numero >= 0 && numero <= 10) {
      arrayConNumerosQueCumplenLaFuncion.push(numero);
    }
  });
  return arrayConNumerosQueCumplenLaFuncion;
}

// 4) Momento de creatividad! – Definir una función que reciba tres parámetros, algo, y dos callbacks, que internamente las ejecute y realice algún procedimiento.

let papanataSoy = false;

function chequear() {
    return "Soy un papanatas";
}

function reconfirmar(callback) {
    return callback() + " y además programo en JavaScript";
}

function evaluarSiSoyPapanatas(respuesta, chequear, reconfirmar) {
    if (respuesta) {
        return chequear();
    } else {
        return reconfirmar(chequear);
    }
}

// 5) Realizar una función que se llame validarIngreso, que reciba una edad, y una callback. Esta función debe validar por medio de un operador ternario si puede intregar o no (la condición es que sea mayor a 18 años). El resultado del operador ternario de debe pasar como argumento a la ejecución de la callback. (Podes elegir que hacer con la función callback que le vas a pasar por agumento a la función validarIngreso)

function validarIngreso (edad, callback) {
    let esMayor = edad >= 18 ? true : false
    return callback(esMayor)
}
