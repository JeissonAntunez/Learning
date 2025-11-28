// function factorial(n) {
    
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// while ( 0 ) {
//     if (n === 0) {

//     }
// }

// for ( let i = 5; 0 < i; i-- ) {
//     let factorial = i * (i-1); 
//     let sumFactoria;
//     sumFactoria += factorial;
//     return sumFactoria;
// }




// FOR
console.time("FOR");
function factorialFor(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
factorialFor(10000);
console.timeEnd("FOR");

// RECURSIÓN
console.time("RECURSIÓN");
function factorialRecursivo(n) {
    if (n === 0) return 1;
    return n * factorialRecursivo(n - 1);
}
factorialRecursivo(10000);
console.timeEnd("RECURSIÓN");