//    EJERCICIO:
//  * Implementa los mecanismos de introducción y recuperación de elementos propios de las
//  * pilas (stacks - LIFO) y las colas (queue - FIFO) utilizando una estructura de array
//  * o lista (dependiendo de las posibilidades de tu lenguaje).


// Pila (Stack - LIFO)
/*
Una pila es una estructura de datos que sigue el principio LIFO 
(Last In, First Out).
Los elementos se añaden y se eliminan desde la parte superior de la pila.
*/

let pila = [];

// agregamos
pila.push(1);
pila.push(2);
pila.push(3);

// eliminamos el ultimo valor agregado
pila.pop();

// vemos el ultimo valor


console.log(pila);






// Cola (Queue - FIFO)
/*
Una cola es una estructura de datos que sigue el principio FIFO 
(First In, First Out). 
Los elementos se añaden al final de la cola y se eliminan desde el frente.
*/









//  * DIFICULTAD EXTRA (opcional):
//  * - Utilizando la implementación de pila y cadenas de texto, simula el mecanismo adelante/atrás
//  *   de un navegador web. Crea un programa en el que puedas navegar a una página o indicarle
//  *   que te quieres desplazar adelante o atrás, mostrando en cada caso el nombre de la web.
//  *   Las palabras "adelante", "atrás" desencadenan esta acción, el resto se interpreta como
//  *   el nombre de una nueva web.
//  * - Utilizando la implementación de cola y cadenas de texto, simula el mecanismo de una
//  *   impresora compartida que recibe documentos y los imprime cuando así se le indica.
//  *   La palabra "imprimir" imprime un elemento de la cola, el resto de palabras se
//  *   interpretan como nombres de documentos.