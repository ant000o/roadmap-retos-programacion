//  * EJERCICIO:
//  * Entiende el concepto de recursividad creando una función recursiva que imprima
//  * números del 100 al 0.


let cuentaAtras = num => {
    // base case
    if (num <= 0){
        return;
    }
    console.log(num);
    return cuentaAtras(num - 1); // La función se repetira cada vez restando un número, hasta cumplir con el if.
}
cuentaAtras(100);


console.log('---------------------------------------------------------------------');
console.log('---------------------------------------------------------------------');
console.log('---------------------------------------------------------------------');
console.log('---------------------------------------------------------------------\n');
//  * DIFICULTAD EXTRA (opcional):
//  * Utiliza el concepto de recursividad para:
//  * - Calcular el factorial de un número concreto (la función recibe ese número).
//  * - Calcular el valor de un elemento concreto (según su posición) en la sucesión de Fibonacci (la función recibe la posición).

// Factorial
function factorial(num){
    // base case
    if (num === 0 ){
        return 1;
    }else{
        const resultado = num * factorial(num - 1); // recursive call
        return resultado;
    }
}
console.log(factorial(5));

// Fibonacci
function fibonacci(num){
    if (num <= 0){
        return 0;
    }else if(num === 1){
        return 1;
    }else{
        const resultado = fibonacci(num - 1) + fibonacci(num - 2);
        return resultado;
    }
}
console.log(fibonacci(6));