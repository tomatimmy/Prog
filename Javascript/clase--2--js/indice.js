/* CALCULADORA DE MASA CORPORAL */

let peso = parseInt(prompt("Ingrese su peso:"));
let estatura = parseInt(prompt("Ingrese su estatura"));
let imc = peso / (estatura * estatura);

console.log("El indice de masa corporal es de " + (imc * 10000));

