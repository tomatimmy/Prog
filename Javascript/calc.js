// CALCULADORA MUY PERO MUY FALOPA!!!

let numeroUno = Number(prompt('Ingresa un numero: '));

if (!isNaN(numeroUno)) {
    let operador = (prompt('Ingresa un operador ( + , - , * , / ): '));
        if (operador !== '') {
            let numeroDos = Number(prompt('Ingresa otro numero: '));
                if (!isNaN(numeroDos)) {
                    if (operador === '+') {
                        alert('El resultado es: ' + (numeroUno + numeroDos));
                    } else if (operador === '-') {
                        alert('El resultado es: ' + (numeroUno - numeroDos));
                    } else if (operador === '*') {
                        alert('El resultado es: ' + (numeroUno * numeroDos));
                    } else if (operador === '/') {
                        alert('El resultado es: ' + (numeroUno / numeroDos));
                    }
                }
        }
}