// Ejercicio 1 del libro 

// for (let simbolo = '#'; (simbolo.length <= 7); simbolo = simbolo + '#') {
//     console.log(simbolo);
// }

// Ejercicio 2 del libro 

// for (let actual = 0; actual <= 100 ; actual ++ ) {
//     if (actual % 5 == 0 && actual % 3 == 0) {
//         console.log('FizzBuzz');
//     } else if (actual % 3 == 0) {
//         console.log('Fizz');
//     } else if (actual % 5 == 0) {
//         console.log('Buzz'); 
//     } else {
//         console.log(actual);
//     }
// }

// Functions
// Ejercicio 1:

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(-10, -100))
