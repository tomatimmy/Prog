/* Tipos de datos booleanos:*/
//Tipo de dato que admite dos valores: verdadero o falso. 

let verdadero  = true;
let falso = false;

console.log(verdadero, typeof verdadero);

/*CONDICIONALES */

let esSoleado = false;

if (esSoleado) {
    alert("Es un dia soleado, nos vamos a la playa");
}

/* alert("Fin del Proceso");  */

//Usamos la palabra resevada if y evaluamos una condición. Si es verdadero se ejecuta el código entre llaves.

/* EVALUACIONES BOOLEANAS */
//Las variables booleanas pueden recibir su valor a partir de una evaluación booleana a partir de otras variables. 

let ejemploUno = 3 > 0;
console.log("Ejemplo Uno");
console.log(ejemploUno, typeof ejemploUno);

/* OPERADORES LÓGICOS */

//Estos operadores son comunes a todos los lenguajes de programación. 

/* == igual */

let ejemploDos = (54 == 53);
console.log("Ejemplo Dos");
console.log(ejemploDos);

/* === Estrictamente Igual (en valor y en tipo de dato)*/

let ejemploTres = (54 === "54");
console.log("Ejemplo Tres");
console.log(ejemploTres);

/* != es distinto // !== estrictamente distinto*/

let ejemploCuatro = (76 !== "76");
console.log("Ejemplo Cuatro");
console.log(ejemploCuatro);

/* menor < (alt 60), menor igual <=, mayor > (alt 62), mayor igual >= (Guarda el mayor igual es asi)*/

let ejemploCinco = (20 < 21);
console.log("Ejemplo Cinco") ;
console.log(ejemploCinco);


/* Operador ! not*/ 

let clima = "soleado";

let ejemploSeis = (clima != "lluvioso");
console.log("Ejemplo Seis:");
console.log(ejemploSeis);

/* OPERADOR AND && y OR || */

//&& = SE TIENE QUE CUMPLIR LAS DOS CONDICIONES PARA QUE RETORNE VERDADERO.

let temperatura = 30;

let ejemploSiete = (temperatura >= 40) || (clima == "soleado");
console.log("Ejemplo Siete");
console.log(ejemploSiete);

// || Por lo menos una condición se tiene que cumplir para que retorne verdadero. 

/* PRACTICAMOS CON CONDICIONALES */

/* let edad = parseInt(prompt("Ingrese su edad:"));

if(edad < 12) {
    alert("Sos un niño! Anda a mirar Pokemon");
}else if (edad >= 12 && edad <= 16) {
    alert("Estas en la pubertad! Anda palla bobo!");
}else if (edad > 16 && edad <= 19){
    alert("Estas en la adolescencia, casi casi podes entrar!");
}else {
    alert("Estas viejito!, podes pasar");
}
 */

//Utilizo la palabra reservada ELSE para ejecutar código si la condición es falsa. 
//"Si se cumple la condición ejecuto el código entre llaves, sino ejecuto el else"


/* EJEMPLO USUARIO CONTRASEÑA */

let usuarioAutorizado = "stocaimaza";
let passwordAutorizado = "pepelepu";

let usuarioIngresado = prompt("Ingrese su nombre de usuario:");
let passwordIngresado = prompt("Ingrese su password:");

if(usuarioIngresado === usuarioAutorizado && passwordIngresado === passwordAutorizado) {
    alert("Los datos son correctos, puede ingresar ");
}else {
    alert("Los datos son incorrectos! Rata");
}





