// EJERCICIO:
//  * Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
//  * en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
//  * - Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición, recorrido,
//  *   conversión a mayúsculas y minúsculas, reemplazo, división, unión, interpolación, verificación...

let texto = "¡Hola Mundo!";
let texto2 = "lol"

// Longitud
console.log(texto.length);

// Acceso a caracteres
console.log(texto[2]); // Por índice
console.log(texto.charAt(4)) // charAt()
console.log(texto.charCodeAt(0)) // Código Unicode

// Subcadenas
console.log(texto.slice(0, 5));
console.log(texto.substring(6, 12));

// Concatenación
console.log(texto + " soy ant000o, " + texto2); // Operador +
console.log(texto.concat( " soy ant000o, ", texto2)); // concat()

// Recorrido (iteración)
for (let i = 0; i < texto.length; i++){   // for
    console.log(i);
}
for (const char of texto){   // for...of
    console.log(char);
}

// Conversión a mayúsculas / minúsculas
console.log(texto.toUpperCase()); // Mayúsculas
console.log(texto.toLowerCase()); // Minúsculas

// Reemplazo
console.log(texto.replace("a", "WWW")); // Reemplaza la primera "o" que encuentra por WWW --- También cambia por palabra.
console.log(texto.replaceAll("o", "WWW")); // Reemplaza todas las "o" por WWW

// División
let texto3 = "Texto que se convertira en array."
let array = texto3.split(" "); // Las palabras separadas por " " se ordenan en un Array.
console.log(array);

// Union (join) (con arrays)
console.log(array.join(" ")); // Se unió lo que se dividió en lo de arriba.

// Interpolación (Template literals)
console.log(`Hola ${texto2}`);

// Busqueda y verificación
console.log(texto.includes("y")); // Método booleano, retorna true o false si lo puesto está en el string o no.
console.log(texto.startsWith("¡Ho")); // Retorna true o false si empieza con lo escrito.
console.log(texto.endsWith("do!")); // Retorna true o false si termina con lo escrito.

// Posición de caracteres / subcadenas
console.log(texto.indexOf("d"));
console.log(texto.lastIndexOf("o"));

// Comparación
console.log(texto === "¡Hola Mundo!");

// Eliminación de espacios
let texto4 = "   foo    "
console.log(texto4.trim() + "a");
console.log(texto4.trimStart() + "a");
console.log(texto4.trimEnd());

// Relleno (padding)
console.log(texto.padStart(20, "ant000o "));
console.log(texto.padEnd(16, " wtf"));

// Conversión
let num = "534"
console.log(Number(num));
console.log(parseInt(num)); 
num = 453;
console.log(num.toString());
console.log(String(num));

// Verificaciones con regex
const texto5 = "Hola 123 Mundo 456";
console.log(texto5.match(/\d+/g));
// ["123", "456"]

console.log(texto.search(/hola/i));
const texto6 = "Hola Mundo";
console.log(texto6.search(/Mundo/)); // 5

const texto7 = "abc123";
console.log(texto7.replace(/\d/g, "*"));
// "abc***"

const texto8 = "Hola123";
console.log(/[0-9]/.test(texto8)); // true


console.log('---------------------------------------------------------------------');
console.log('---------------------------------------------------------------------');
console.log('---------------------------------------------------------------------');
console.log('---------------------------------------------------------------------\n');
//  * DIFICULTAD EXTRA (opcional):
//  * Crea un programa que analice dos palabras diferentes y realice comprobaciones
//  * para descubrir si son:
//  * - Palíndromos
//  * - Anagramas
//  * - Isogramas
//  */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese una palabra: ', (word1) => {
    rl.question('Ingrese otra palabra: ', (word2) => {
        console.log(`Las palabras son ${word1} y ${word2}`);
        esPalindromo(word1);
        esPalindromo(word2);
        esIsograma(word1);
        esIsograma(word2);
        esAnagrama(word1, word2);
        rl.close();
    });
});

function esPalindromo(word){
    const invertido = word.toLowerCase().split("").reverse().join("");
    if (invertido === word.toLowerCase()){
        console.log(`La palabra "${word}" es palíndromo`);
    }else{
        console.log(`La palabra "${word}" No es palíndromo`);
    }
}

function esIsograma(word){
    const letras = word.toLowerCase().split("");
    const unicas = new Set(letras);
    if (unicas.size === letras.length){
        console.log(`La palabra "${word}" es un isograma`)
    }else{
        console.log(`La palabra "${word}" no es un isograma`)
    }
}

function esAnagrama(word1, word2){
    const reorden1 = word1.toLowerCase().split("").sort().join("");
    const reorden2 = word2.toLowerCase().split("").sort().join("");
    console.log(reorden1, reorden2)
    if(word1 !== word2 && reorden1 === reorden2){
        console.log(`Las palabras "${word1}" y "${word2}" son anagramas.`)
    }else{
        console.log(`Las palabras "${word1}" y "${word2}" no son anagramas.`)
    }
}