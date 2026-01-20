// EJERCICIO:
//  * - Muestra ejemplos de asignación de variables "por valor" y "por referencia", según
//  *   su tipo de dato.
//  * - Muestra ejemplos de funciones con variables que se les pasan "por valor" y 
//  *   "por referencia", y cómo se comportan en cada caso en el momento de ser modificadas.
//  * (Entender estos conceptos es algo esencial en la gran mayoría de lenguajes)


// Hay 5 tipos de datos que son pasados por valor: Boolean, Null, Undefined, String, Number, Symbol y BigInt (valores primitivos del lenguaje).

let x = 10;  
let y = 'abc';
let z = null;
let a = x;  // Se copian los valores
let b = y;
console.log(x, y, a, b); // -> 10, 'abc', 10, 'abc'
a = 5;  // Cambiar estos valores no afectan a las otras variables.
b = 'def';
console.log(x, y, a, b); // -> 10, 'abc', 5, 'def'


// En JavaScript los valores no primitivos (Object, Array, Function, Map, Set, etc.) se pasan por referencia.
/*💡Las variables a las que se les asigna un valor no primitivo reciben una referencia a ese valor. 
Esa referencia apunta a la ubicación del objeto en la memoria. Las variables no contienen realmente el valor💡*/

let arr = [1];
let arr2 = arr; // Copia la referencia, si algo cambia en arr, cambiará también en arr2.
arr.push(2);  
console.log(arr, arr2); // -> [1, 2], [1, 2]

// Reasignación de una referencia
let obj = { primero: 'referencia' };
obj = { segundo: 'ref2' } // Lo asignado arriba pierde la referencia, por lo tanto queda con lo reasignado solamente.
console.log(obj)

// == y ===
let arrRef = ['Hola'];  
let arrRef2 = arrRef;
console.log(arrRef === arrRef2); // -> true

let arr1 = ['Hola'];
arr2 = ['Hola'];
console.log(arr1 === arr2); // -> false


// Pasar parámetros a través de funciones
// Cuando pasamos valores primitivos a una función, ésta copia los valores en sus parámetros. Es efectivamente lo mismo que usar =.

let cien = 100;  
let dos = 2;
function multiplicar(x, y) {
    // PAUSA
    return x * y;  
}
let doscientos = multiplicar(cien, dos);


// Funcion impura vs pura
// En la impura actúa sobre la referencia, cambió directamente el objeto claudia, en vez de crear una copia.
function cambiandoLaEdadImpuramente(persona) {  
    persona.edad = 25;  
    return persona;  
}
let claudia = {  
    nombre: 'Claudia',  
    edad: 31  
};
let claudiaCambiada = cambiandoLaEdadImpuramente(claudia);
console.log(claudia); // -> { nombre: 'Claudia', edad: 25 }  
console.log(claudiaCambiada); // -> { nombre: 'Claudia', age: 25 }

/*
    En esta función, utilizamos JSON.stringify para transformar el objeto que se nos pasa en una cadena, y luego lo volvemos a parsear en un objeto con JSON.parse. 
    Al realizar esta transformación y almacenar el resultado en una nueva variable, hemos creado un nuevo objeto. 
    Hay otras formas de hacer lo mismo que veremos en un siguiente artículo, pero esta forma es la más sencilla. 
    El nuevo objeto tiene las mismas propiedades que el original pero es un objeto distinto en la memoria.
*/
function cambiandoLaEdadPuramente(persona) {  
    let nuevaPersona = JSON.parse(JSON.stringify(persona));  
    nuevaPersona.edad = 25;  
    return nuevaPersona;  
}
let claudia2 = {  
    nombre: 'Claudia',  
    edad: 31  
};
let claudiaCambiada2 = cambiandoLaEdadPuramente(claudia2);
console.log(claudia2); // -> { nombre: 'Claudia', edad: 31 }  
console.log(claudiaCambiada2); // -> { nombre: 'Claudia', edad: 25 }


//
function cambiaLaEdadYLaReferencia(persona) {  
    persona.edad = 25;      // Aquí cambiará la edad de Claudia. 
    persona = {             // Aquí se crea un nuevo objeto, por lo que dejará de afectar al objeto persona1.
        nombre: 'John',
        edad: 50
    };
    return persona;         // Retorna el objeto nuevo.
}
let persona1 = {
    nombre: 'Claudia',
    edad: 31
};
let persona2 = cambiaLaEdadYLaReferencia(persona1);     // persona2 quedará con lo del objeto persona creado dentro de la función, mientras que persona1 solo cambiará la edad.
console.log(persona1); // -> { nombre: 'Claudia', edad: 25 }  
console.log(persona2); // -> { nombre: 'John', edad: 50 }




console.log('---------------------------------------------------------------------');
console.log('---------------------------------------------------------------------');
console.log('---------------------------------------------------------------------');
console.log('---------------------------------------------------------------------\n');
//  * DIFICULTAD EXTRA (opcional):
//  * Crea dos programas que reciban dos parámetros (cada uno) definidos como variables anteriormente.
//  * - Cada programa recibe, en un caso, dos parámetros por valor, y en otro caso, por referencia.
//  *   Estos parámetros los intercambia entre ellos en su interior, los retorna, y su retorno
//  *   se asigna a dos variables diferentes a las originales. A continuación, imprime el valor de las
//  *   variables originales y las nuevas, comprobando que se ha invertido su valor en las segundas.
//  *   Comprueba también que se ha conservado el valor original en las primeras.
//  */


// Por valor
let hola = "hola";
let mundo = "mundo";
function intercambiarValor(a, b){
    let aux = a;
    a = b;
    b = aux;
    return [a, b]
}
const resultado = intercambiarValor(hola, mundo);
let hola2 = resultado[0];
let mundo2 = resultado[1];
console.log(`Variables originiales: ${hola} ${mundo}`);
console.log(`Variables intercambiadas: ${hola2} ${mundo2}`);

// Por referencia
let obj1 = { valor: 10 };
let obj2 = { valor: 20 };
console.log("Originales (antes de la función):");
console.log(obj1, obj2);
function intercambiarReferencia(object1, object2){
    let aux = object1.valor;
    object1.valor = object2.valor;
    object2.valor = aux;
    return [object1, object2]
}
const [obj1_2, obj2_2] = intercambiarReferencia(obj1, obj2);
console.log("Originales (después de la función):");
console.log(obj1, obj2);
console.log("Retorno:");
console.log(obj1_2, obj2_2);



// Lo siguiente es de la manera del usuario 7TR0N1X:
function myFunc2(a, b) {
  let aux = a
  a = b
  b = aux
  return { a, b }
}

let myArray1 = [1, 2, 3]
let myArray2 = [4, 5, 6]

console.log(`Valores originales -> myArray1: ${myArray1}, myArray2: ${myArray2}`)

let { a: myArray3, b: myArray4 } = myFunc2(myArray1, myArray2)
console.log(`Valores Intercambiados -> myArray3: ${myArray3}, myArray4: ${myArray4}`)
console.log(`Valores originales -> myArray1: ${myArray1}, myArray2: ${myArray2}`)
