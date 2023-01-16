let peso = parseInt(prompt('Ingrese su peso en kilogramos: '));
let altura = parseInt(prompt('Ingrese su altura en centimetros: '));

let imc = (peso / (altura * altura)) * 10000; 

// Calculadora actualizada con lo aprendido hoy (condicionales)

let teFaltaGuiso = (imc < 18.5)
let estasJamon = (imc >= 18.5 && imc < 24.9)
let tenesDeDondeAgarrar = (imc >= 24.9 && imc < 29.9)
// let tusHuesosSonGrandes = (imc >= 29.9) esta la podemos suplantar por el 'else'

if (teFaltaGuiso) {
    console.log('Tu IMC es ' + imc + '. Te falta Guiso.');
} else if (estasJamon) {
    console.log('Tu IMC es ' + imc + '. Estas Jamon.');
} else if (tenesDeDondeAgarrar) {
    console.log('Tu IMC es ' + imc + '. Pa que tengas de donde agarrar.');
} else {
    console.log('Tu IMC es ' + imc + '. NO ESTAS GORDO, TENES HUESOS GRANDES.');
}