//Arreglo de empleados antiguos
let empleados_antiguos = [
    { nombre: "Maria Perez", edad: 34, puesto: "Staff", salario: 230 },
    { nombre: "Jose Meza", edad: 20, puesto: "Camarero", salario: 150 },
    { nombre: "Pepe Parra", edad: 52, puesto: "Cajero", salario: 300 },
    { nombre: "Josefa Pineda", edad: 18, puesto: "Staff", salario: 5200 },
    { nombre: "Mario Casas", edad: 36, puesto: "Camarero", salario: 150 }
];

//Arreglo vacio de empleados nuevos
let empleados = [];

//Bucle del menu
let continuar = true;

while (continuar) {
    let respuesta = +prompt("Hola, esta es una herramienta de gestión empresarial donde podemos lleva el registro de nuestos empleados.\nElige el número de la opción que quieres seleccionar:\n1. Muestra los datos de empleados antiguos.\n2. Muestra los datos de empleados nuevos.\n3. Muestra los datos de todos los empleados.\n4. Agrega un nuevo empleado.\n5. Eliminar un empleado.\n6. Salir.");

    if (respuesta === 1) {
        mostrarEmpleadosAntiguos();

    } else if (respuesta === 2) {
        mostrarEmpleadosNuevos();

    } else if (respuesta === 3) {
        mostrarTodos();

    } else if (respuesta === 4) {
        let nombre = prompt("Ingresa el nombre del empleado (ej: Mauricio Flores)");
        let edad = +prompt("Ingresa la edad (ej: 25)");
        let puesto = prompt("Ingresa su puesto de trabajo (ej: Staff, Camarero o Cajero)");
        let salario = +prompt("Ingrese el salario a pagar (ej: 250)");

        crearEmpleado(nombre, edad, puesto, salario);
    } else if (respuesta === 5) {
        eliminarEmpleado();

    } else if (respuesta === 6) {
        alert("Muchas gracias por usar el programa.");
        continuar = false;

    } else {
        alert("ingesa un número válido.");
    }
}
//Fin

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

//Funcion para mostrar info de menu 3.
function mostrarTodos() {
    let todos = empleados_antiguos.concat(empleados);
    let nombres_empleados = [];
    let valor_salario_maximo = 0;
    let empleado_salario_maximo = null;
    let empleados_senior = [];

//Varianles ara guardar el salario por departamento
    let salario_staff = 0;
    let salario_cajero = 0;
    let salario_camarero = 0;


    for (let i = 0; i < todos.length; i++) {
        nombres_empleados.push(todos[i].nombre);

        if (todos[i].salario > valor_salario_maximo) { // ciclo para encontrar el empleado con salario maximo
            valor_salario_maximo = todos[i].salario;
            empleado_salario_maximo = todos[i];
        }

        if (todos[i].edad > 50) { // ciclo para encontrar a los empleados mayores de 50 años
            empleados_senior.push(`${todos[i].nombre} (${todos[i].edad}) `);
        }

        if (todos[i].puesto.toLowerCase() === "staff") { // Sumar salarios según el puesto
            salario_staff += todos[i].salario;
        } else if (todos[i].puesto.toLowerCase() === "cajero") {
            salario_cajero += todos[i].salario;
        } else if (todos[i].puesto.toLowerCase() === "camarero") {
            salario_camarero += todos[i].salario;
        }
    }

    for (let i = 0; i < todos.length; i++) { // ciclo para encontrar al empleado con el salario mayor a 5000
        if (todos[i].salario > 5000) {
            alert(`El empleado ${todos[i].nombre} tiene un salario alto de $${todos[i].salario} mil.`);
        }
    }

    let nombres_todos = nombres_empleados.join(", "); //variable para mostrar el nombre de cada empleado

    alert(`Aquí hay un resumen con la información de todos tus trabajadores:\n\nHay un total de ${todos.length} empleados. Hay ${empleados.length} empleados nuevos y ${empleados_antiguos.length} empleados antiguos.\nSus nombres son: ${nombres_todos}.\nEl salario total es de: $${sumarSalario()} mil.\nEl empleado con el salario máximo es: ${empleado_salario_maximo.nombre} con $${valor_salario_maximo} mil.\nLista de empleados Senior (más de 50 años de edad):\n${empleados_senior}\nSalario total por departamento:\n Staff: $${salario_staff} mil.\n Cajero: $${salario_cajero} mil.\n Camarero: $${salario_camarero} mil.`);
}

//Funcion eliminar empleados antiguos
function eliminarEmpleado() {
    let opcion = +prompt("Solo puedes eliminar empleados antiguos. Escribe el número del empleado que quisieras eliminar\n1. Maria Perez\n2. Jose Meza\n3. Pepe Parra\n4. Josefa Pineda\n5. Mario Casas");

    if (opcion >= 1 && opcion <= empleados_antiguos.length) {
        let indice = opcion - 1;
        let eliminado = empleados_antiguos.splice(indice, 1);

        alert(`Empleado "${eliminado[0].nombre}" eliminado correctamente.`);
    } else {
        alert("Opción inválida. No se eliminó ningún empleado.");
    }
}

// Funcion sumar salario
function sumarSalario() {
    let total = 0;

    for (let i = 0; i < empleados_antiguos.length; i++) {
        total += empleados_antiguos[i].salario;
    }

    for (let i = 0; i < empleados.length; i++) {
        total += empleados[i].salario;
    }
    return total;
}





