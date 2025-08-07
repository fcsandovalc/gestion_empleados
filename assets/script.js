//Inicio
respuesta = prompt("Hola, esta es una herramienta de gestión empresarial donde podemos lleva el registro de nuestos empleados.\nElige el número de la opción que quieres seleccionar:\n1. Muestra los datos de empleados antiguos.\n2. Agrega un nuevo empleado.\n3. Salir.");


//Elige agregar o no un cliente 
if (respuesta == 1) {
    
} else if (respuesta == 2){
    let nombre = prompt("Ingresa el nombre del empleado (ej: Mauricio Flores)");
    let edad = +prompt("Ingresa la edad (ej: 25)");
    let puesto = prompt("Ingresa su puesto de trabajo (ej: Staff, Camarero o Cajero)");
    let salario = +prompt("Ingrese el salario a pagar (ej: 250)");
}

let empleados = [];

let empleado = [
    { nombre: "Maria Perez", edad: 34, puesto: "Staff", salario: 230 },
    { nombre: "Jose Meza", edad: 20, puesto: "Camarero", salario: 150 },
    { nombre: "Pepe Parra", edad: 45, puesto: "Cajero", salario: 300 },
    { nombre: "Josefa Pineda", edad: 18, puesto: "Staff", salario: 230 },
    { nombre: "Mario Casas", edad: 36, puesto: "Canarero", salario: 150 }
];

function crearEmpleado(nombre, edad, puesto, salario) {
    let nuevo_empleado = {
        nombre: nombre,
        edad: edad,
        puesto: puesto,
        salario: salario
    }
};

empleados.push(nuevo_empleado);

function mostrarEmpleadosNuevos(empleados) {

}

function mostrarEmpleadosAntiguos(){

}