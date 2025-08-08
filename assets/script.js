//Arreglo de empleados antiguos
let empleados_antiguos = [
    { nombre: "Maria Perez", edad: 34, puesto: "Staff", salario: 230 },
    { nombre: "Jose Meza", edad: 20, puesto: "Camarero", salario: 150 },
    { nombre: "Pepe Parra", edad: 45, puesto: "Cajero", salario: 300 },
    { nombre: "Josefa Pineda", edad: 18, puesto: "Staff", salario: 230 },
    { nombre: "Mario Casas", edad: 36, puesto: "Camarero", salario: 150 }
];

//Arreglo vacio de empleados nuevos
let empleados = [];

//Bucle del menu
let continuar = true;

while (continuar) {
    let respuesta = +prompt("Hola, esta es una herramienta de gestión empresarial donde podemos lleva el registro de nuestos empleados.\nElige el número de la opción que quieres seleccionar:\n1. Muestra los datos de empleados antiguos.\n2.Muestra los datos de empleados nuevos.\n3. Agrega un nuevo empleado.\n4. Salir.");

    if (respuesta === 1) {
        mostrarEmpleadosAntiguos();

    } else if (respuesta === 2) {
        mostrarEmpleadosNuevos();

    } else if (respuesta === 3) {
        let nombre = prompt("Ingresa el nombre del empleado (ej: Mauricio Flores)");
        let edad = +prompt("Ingresa la edad (ej: 25)");
        let puesto = prompt("Ingresa su puesto de trabajo (ej: Staff, Camarero o Cajero)");
        let salario = +prompt("Ingrese el salario a pagar (ej: 250)");

        crearEmpleado(nombre, edad, puesto, salario);

    } else if (respuesta === 4) {
        alert("Muchas gracias por usar el programa.");
        continuar = false;
    } else {
        alert("ingesa un número válido.");
    }
}

//Funcion para crear empleado
function crearEmpleado(nombre, edad, puesto, salario) {
    let nuevo_empleado = {
        nombre: nombre,
        edad: edad,
        puesto: puesto,
        salario: salario
    }
    empleados.push(nuevo_empleado);
}

//Funcion para mostrar empleados antiguos
function mostrarEmpleadosAntiguos() {
    let lista_empleados_antiguos = [];

    for (let i = 0; i < empleados_antiguos.length; i++) {
        let empleado = empleados_antiguos[i];
        lista_empleados_antiguos.push(`Nombre: ${empleado.nombre}\nEdad: ${empleado.edad} años\nPuesto: ${empleado.puesto}\nSalario: $${empleado.salario} mil`);
    }
    alert(lista_empleados_antiguos.join("\n\n"));
}

//Funcion para mostrar empleados nuevos
function mostrarEmpleadosNuevos() {
    if (empleados.length === 0) {
        alert("No hay empleados nuevos registrados.");
        return;
    }
    let lista_empleados_nuevos = [];

    for (let i = 0; i < empleados.length; i++) {
        let empleado = empleados[i];
        lista_empleados_nuevos.push(`Nombre: ${empleado.nombre}\nEdad: ${empleado.edad} años\nPuesto: ${empleado.puesto}\nSalario: $${empleado.salario} mil`);
    }
    alert(lista_empleados_nuevos.join("\n\n"));
}