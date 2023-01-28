let peso = parseInt(prompt('Ingrese su peso en kilogramos: (ingrese 0 para omitir)'));
while (isNaN(peso)) {
    peso = parseInt(prompt('Ingrese su peso en kilogramos: (ingrese 0 para omitir)'));
    if (peso === 0) {
        break;
    }
}

let altura = parseInt(prompt('Ingrese su altura en centimetros: (ingrese 0 para omitir)'));
while (isNaN(altura)) {
    altura = parseInt(prompt('Ingrese su altura en centimetros: (ingrese 0 para omitir)'));
    if (altura === 0) {
        break;
    }
}


let imc = (peso / (altura * altura)) * 10000;
let teFaltaGuiso = (imc < 18.5)
let estasJamon = (imc >= 18.5 && imc < 24.9)
let tenesDeDondeAgarrar = (imc >= 24.9 && imc < 29.9)
let tusHuesosSonGrandes = (imc >= 29.9)

if (peso === 0 && altura === 0) {
    alert('Me hiciste trabajar al pedo, no servís para nada')
} else if (peso === 0 || altura === 0) {
    alert('Omitiste un dato, corki.');
} else if (teFaltaGuiso) {
    alert('Tu IMC es ' + imc + '. Te falta Guiso.');
} else if (estasJamon) {
    alert('Tu IMC es ' + imc + '. Estas Jamon.');
} else if (tenesDeDondeAgarrar) {
    alert('Tu IMC es ' + imc + '. Pa que tengas de donde agarrar.');
} else {
    alert('Tu IMC es ' + imc + '. NO ESTAS GORDO, TENES HUESOS GRANDES.');
}
AAC624828
YTRQ6541
