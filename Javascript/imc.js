let peso = parseInt(prompt('Ingrese su peso en kilogramos: '));
let altura = parseInt(prompt('Ingrese su altura en centimetros: '));

let imc = (peso / (altura * altura)) * 10000;

alert('Tu IMC es : ' + imc);