/** EJERCICIO PARECIDO A PRE ENTREGA - BANCO CODERJAUS **/

//Clase Cliente

class Cliente {
    constructor(nombre, apellido, dni, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.saldo = saldo;
    }
}

const samuel = new Cliente("Samuel", "Tocaimaza", 45000000, 1000);
const juan = new Cliente("Juan", "Perez", 78542136, 2000);
const maria = new Cliente("Maria", "Gomez", 12345678, 3000);
const pedro = new Cliente("Pedro", "Gonzalez", 12345685, 4000);

const arrayClientes = [samuel, juan, maria, pedro];

console.log(arrayClientes);

//Función con el menú de opciones. 

function menu() {
    alert("Bienvenido al Banco Coderjaus");
    let opcion = parseInt(prompt("Ingrese una opción: \n 1) Alta de Cliente \n 2) Baja de Cliente \n 3) Modificación de Cliente \n 4) Consulta de Cliente \n 5) Salir"));
    return opcion;
}

//Funciónpara dar de alta a un cliente: 

function altaCliente() {
    let nombre = prompt("Ingrese el nombre del cliente:");
    let apellido = prompt("Ingrese el apellido del Cliente:");
    let dni = parseInt(prompt("Ingrese el dni del cliente: "));
    let saldo = parseInt(prompt("Ingrese el saldo: "));
    let cliente = new Cliente(nombre, apellido, dni, saldo);
    arrayClientes.push(cliente);
    console.log(arrayClientes);
}

//Función para dar de baja a un cliente: 

function bajaCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let cliente = arrayClientes.find( cliente => cliente.dni === dni);
    let indice = arrayClientes.indexOf(cliente);
    arrayClientes.splice(indice, 1);
    console.log(arrayClientes);
}

//Función para modificar un cliente: 

function modificacionCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    let indice = arrayClientes.indexOf(cliente);
    let nombre = prompt("Ingrese el nombre del cliente:");
    let apellido = prompt("Ingrese el apellido del Cliente:");
    let saldo = parseInt(prompt("Ingrese el saldo: "));
    let clienteModificado = new Cliente(nombre, apellido, dni, saldo);
    arrayClientes.splice(indice, 1, clienteModificado);
    console.log(arrayClientes);
}


//Función para consultar un cliente: 

function consultaCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    console.log(cliente);
}


//Función para salir del programa: 

function salir() {
    alert("Gracias por utilizar el banco Coderjaus");
}

//Ejecuto el programa: 

let opcion = menu();
while (isNaN(opcion) || opcion <= 0 || opcion > 5) {
    alert('Opcion incorrecta, rata!');
    opcion = menu();
}

switch(opcion) {
    case 1: 
        altaCliente();
        break;
    case 2: 
        bajaCliente();
        break;
    case 3: 
        modificacionCliente();
        break;
    case 4:
        consultaCliente();
        break;
    case 5: 
        salir();
        break;
}