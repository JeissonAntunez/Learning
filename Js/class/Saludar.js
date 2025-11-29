// class Saludar {
//     constructor(nombre) { 
//         this.nombre = nombre;
//     }

const { arrayBuffer } = require("stream/consumers");

//     constructor (nombre, apellido) {
//         return `${nombre} ${apellido}`;
//     }
    
// }
// let saludo = new Saludar('Hola');
// let saludoS = new Saludar('Jeison', 'Lopez');
// console.log(saludo.nombre);
// console.log(saludo.nombre.apellido);
// module.exports = Saludar;

function saludar(nombre){
    return `Hola ${nombre}`;
}

// Numero Par


let numPar = (num)=>{
    if(num % 2 == 0){
        return true;
    } else {
        return false;
    }
} 



// Area de un rectangulo

let areaRectangulo = (base, altura) => {
    return base * altura;
}


// Convetir texto a mayusculas

let textoMayusculas = (texto) => {
    return texto.toUpperCase(); 
}


// Obtener el ultimo elemento de un array

let pila = [1, 2, 3, 4, 5];

function ultimo(array) {
    return array.length - 1;
}

function primero(array) {
    return 0;
}

let ultimoElemento = (array) => {
    // return array[array.length - 1];
    return array[ultimo(array)];
}

let primeroElemento = (array) => {
    return array[primero(array)];
}
saludar('Jeison');
console.log('Saludar module loaded: ' + saludar('Jeison'));
console.log("******************* \n");
console.log('El numero 4 es par? ' + numPar(4));
console.log('El numero 5 es par? ' + numPar(5));
console.log("******************* \n");
console.log('El area de un rectangulo de base 5 y altura 10 es: ' + areaRectangulo(5, 10));
console.log("******************* \n");
console.log('Convertir texto a mayusculas: ' + textoMayusculas('hola mundo'));
console.log("******************* \n");
console.log('El ultimo elemento del array es: ' + ultimoElemento(pila));
console.log("******************* \n");
console.log('El primer elemento del array es: ' + primeroElemento(pila));
console.log("******************* \n");
console.log("******************* \n");
console.log("******************* \n");
console.log("******************* \n");
console.log("******************* \n");
console.log("******************* \n");




// Nivel Intermedio

// Filtrar numeros positivos 

 const numeros = [10, 5, 3, 0, 2, 8, 1];

 function filtrarPositivos(array) {
    return array.filter(num => num > 0);
 }


 console.log('Numeros positivos: ' + filtrarPositivos(numeros));

    console.log("******************* \n");
    
    let porDos = (num) => {
        return num.map(n => n * 2);
    }
    
    // let total = (array) => {
    //     console.log(array);
    //     return array.reduce((acc, curr) => acc + curr, 0);
    // }

    let total = (array) => {
    
        let sumaTotal = 0;
        for( let i=0; i<array.length; i++){
             sumaTotal += array[i];
        }
        return sumaTotal;

    }


    let sumaTotal = (array) => {
        return array.reduce((acc, curr) => acc + curr, 0);
    }
        let sumaRevez = (array) => {
        return array.reduce((acc, curr) => acc + curr, array.length);
    }
    console.log('Numeros por dos: ' + porDos(numeros));
    console.log("******************* \n");
    console.log("******************* \n");
    console.log('Suma de todos los numeros: ' + total(numeros));
    console.log('Suma de todos los numeros: ' + sumaTotal(numeros));
    console.log("******************* \n");
    console.log(numeros.length);
    console.log('Suma de todos los numeros: ' + sumaRevez(numeros));
    console.log("******************* \n");
    console.log("******************* \n");
    console.log("******************* \n");
    console.log("******************* \n");
    console.log("******************* \n");



    // Ahora con objetos 

    const  