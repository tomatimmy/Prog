/** FUNCIONES DE ORDEN SUPERIOR **/

//Una función de orden superior es aquella que puede recibir por parámetro una función o retornar una función. 

//Ejemplo: 

/* function estoEsUnaFuncion( funcion() ) {
    return funcion();
}
 */

//  MÉTODOS DE BÚSQUEDA Y TRANSFORMACIÓN: 

//JS incluye de forma nativa varias funciones de orden superior. 
//Hay métodos de búsqueda y transformación que nos permite operar sobre los arrays. 

//Vamos a trabajar estos métodos con Array de Objetos. 

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio; 
    }
}

const fideos = new Producto("Fideos", 100);
const harina = new Producto("Harina", 250);
const gaseosa = new Producto("Coca Cola", 180);
const pan = new Producto("Pan", 120);

const arrayProductos = [fideos, harina, gaseosa, pan];

console.log("Productos en Stock: ");
console.log(arrayProductos);


//1) ForEach: recorrer el array y ejecutar una función por cada elemento. 

console.log("ForEach:");

arrayProductos.forEach((producto) => {
    console.log(producto);
})


arrayProductos.forEach(producto => console.log(producto.precio));

//2) Find: busca un elemento en el array y retorna el primer elemento que cumpla con una condición. 

const buscado = arrayProductos.find(producto => producto.nombre === "Fideos");

console.log("Find:");
console.log(buscado);

//El método Find retorna el primer elemento que cumpla con la condición, si no lo encuentra retorna: undefined. 

//3) Filter: recibe una función comparadora por parámetro y retorna un nuevo array con los elementos que cumplan la condición. 

const arrayProductosMenos200 = arrayProductos.filter(producto => producto.precio < 200);

console.log("Filter: ");
console.log(arrayProductosMenos200);

//Si no hay coincidencias retorna un array vacio. 

//4) Some: funciona igual que el filter, con la diferencia que retorna true o false si encuentra o no el elemento. 

const hayFideos = arrayProductos.some(producto => producto.nombre === "Polenta");

console.log("Hay fideos? Lo averiguamos con el método some: " + hayFideos);


//5) MAP: me permite crear un nuevo array con todos los elementos del original pero transformados. 

//Ejemplo: creamos un array de productos pero que ahora tenga el iva incluido. 

const arrayProductosConIva = arrayProductos.map( (producto) => {
    return {
        nombre: producto.nombre,
        precio: producto.precio * 1.21
    }
});

console.log("Utilizo MAP para crear un nuevo array con los precios modificados:")
console.log(arrayProductosConIva);

const arrayNombresProductos = arrayProductos.map(producto => producto.nombre);

console.log("Array solo con los nombres de los productos");
console.log(arrayNombresProductos);


//6) Reduce: este método me permite obtener un único valor después de iterar sobre un array. 
//Ejemplo, el total de un carrito de compras. 

//Podemos trabajar con dos parámetros: un acumulador y el elemento a operar. 
//También podemos colocar el valor inicial del acumulador. 


let totalPrecio = arrayProductos.reduce((acumulador, producto) => acumulador + producto.precio, 0 );

console.log("Reduce:");
console.log(totalPrecio);

//7) Sort: me permite reordenar un Array segun un criterio que definamos. (Método destructivo!!)

//Ejemplo A: Ordeno un array de números, de menor a mayor. 

const numero = [99, 58, 74, 8, 23];

numero.sort((a,b) => a - b);

console.log("método sort con un array de numeros (menor a mayor)");
console.log(numero);

//Ejemplo B: Ordeno un Array de numeros, de mayor a menor. 

numero.sort((a,b) => b - a )

console.log("Mayor a menor");
console.log(numero);

//Ejemplo C: Ordeno precios en un array de objetos: 

arrayProductos.sort((a,b) => a.precio - b.precio);
console.log("Método sort con array de objetos: ")
console.log(arrayProductos);

//Ejemplo con letras: 

const letras = ["z", "b", "c", "w"];

letras.sort();
console.log(letras);










