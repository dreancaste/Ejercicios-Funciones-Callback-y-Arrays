// 1)Crear una función que reciba dos parámetros y retorne un valor.

function funcionDosParametros(a, b) {
  return a + b;
}

// 2) Crear una función que se llame calcularAreaCuadrado que reciba un parámetro que sea el lado del cuadrado, calcule el área y la retorne.

function calcularAreaCuadrado(lado) {
  return lado * lado;
}

// 3) Crear una función por declaración, puede hacer lo que quieras.

let aura = 0;

function farmearAura() {
  return (aura += 9999);
}

// 4) Crear una función lambda por expresión que se llame autosuma, recibe un parámetro que es un array de números y retorna la suma del total de los números (utilizar foreach para recorrer el array)

let autoSuma = function (numeros) {
  let total = 0;
  numeros.forEach((numero) => {
    total += numero;
  });
  return total;
};

// 5) Crear una función flecha (arrow function) que reciba un nombre, el año de nacimiento, y retorne un string que diga: “Hola -nombre- este año tenes o cumplis -numero- años”

let cumpleanios = (nombre, anioNacimiento) =>
  `Hola ${nombre} este año tenes o cumplis ${new Date().getFullYear() - anioNacimiento} años`;

// 6) crear una función lambda que se llame inscribirAlumno, que reciba un array de alumnos y un nombre, que agregue al alumno en la ultima posición del array.

let inscribirAlumno = (alumnos, nombre) => {
  alumnos.push(nombre);
  return alumnos;
};

// 7) Crear una función que se llame buscador, que reciba un array con nombres de alumnos y un nombre a buscar, y diga si encuentra el nombre en la lista.

function buscador(alumnos, nombre) {
  return alumnos.includes(nombre);
}
