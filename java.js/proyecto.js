
alert("Bienvenido aqui podras calcular el promedio de las edades de las personas que ingreses")



let edades = [];
let sumaEdades = 0;
let contadorPersonas = 0;
let edadPromedio = 0;


function registrarPersona() {
  let edad = prompt("Ingresa la edad de la persona: ");

  if (!isNaN(edad) && edad !== "") {
    edad = parseInt(edad);
    edades.push(edad);
    sumaEdades += edad;
    contadorPersonas++;
  } else {
    alert("Por favor, ingresa una edad válida.");
  }
}

function calcularEdadPromedio() {
  if (contadorPersonas > 0) {
    edadPromedio = sumaEdades / contadorPersonas;
    alert("La edad promedio de las personas registradas es: " + edadPromedio);
  } else {
    alert("No hay personas registradas.");
  }
}

while (true) {
  let opcion = prompt("Seleccione una opción:\n1. Registrar persona\n2. Calcular edad promedio\n3. Salir");

  if (opcion === "1") {
    registrarPersona();
  } else if (opcion === "2") {
    calcularEdadPromedio();
  } else if (opcion === "3") {
    break;
  } else {
    alert("Opción inválida. Selecciona una opción válida Porfavor.");
  }
}
