//La lista de Samu

//Creamos el "molde" del objeto al cual le vamos a pasar 2 parámetros (nombre y artista)
class Tracks {
    constructor(nombre, artista) {
        this.nombre = nombre;
        this.artista = artista;
    }
}

//Inicializamos el array vacío, al cual le vamos a ir PUSHEANDO (palabra de Luquitas) los tracks agregados
let tracks = [];


//Comenzamos el ciclo donde pedimos al usuario que ingrese el nombre del track y el artista que van a formar nuestro objeto
let i = 0;
while (i < 10) {
    let nombre = prompt('Ingrese el nombre del track: ');
    let artista = prompt('Ingrese el artista: ');
    let track = new Tracks(nombre, artista); //Creamos el objeto con los valores ingresados por el usuario
    tracks.push(track); // PUSHEAMOS el objeto creado al array "tracks"
    let agregar = prompt('Querés agregar otro track?: (ingrese "si" o "no")'); //Preguntamos si quiere seguir agregando tracks
    if (agregar === 'si') { //Si quiere seguir agregando, sumamos 1 a la variable "i" y seguimos iterando
        i++;
    } else { //Si no quiere seguir agregando, rompemos el ciclo 
        break;
    }
}

//Comenzamos el ciclo para imprimir por consola la información del track y el orden en la lista de Samu
for (let i = 0; i < tracks.length; i++) {
    console.log('El track "' + tracks[i].nombre + '" del artista "' + tracks[i].artista + '" es el nro. ' + (i + 1) + ' en la lista de Samu.');
}
