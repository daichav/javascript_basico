// STRINGS = cadena de texto

let ejemplo1 = "Hola"
let ejemplo2 = 'Hola'
let ejemplo3 = `Hola`// aportación de 2014

let frase1 = 'Ella me dijo "¡Hola!"'
console.log(frase1);

let nombre = "sara"
let frase2 = `${nombre.toUpperCase()} me dijo "hola"`
console.log(frase2);

// Forma antigua de crear frases
let saludo1 =  "buenos"
let saludo2 = "días"
let saludoFinal = saludo1 + ' ' + saludo2 // + <-- concatena, une
let saludo_final = saludo1+ saludo2 
console.log(saludoFinal);

console.log("el texto tiene", nombre.length, 'caracteres');
console.log(`el texto tiene ${nombre.length} caracteres`);

// el primero se le asigna la primera posicion como 0, por lo tanto el ultimo elemento, es la cantidad de caracteres -1 
nombre = "bill"
console.log(nombre[0]);

// Tratando de poner el nombre con la primera letra en mayuscula y las demás en minúsculas

nombre = "feDeriCO"
nombre = nombre[0].toUpperCase() + nombre.toLowerCase()

console.log(nombre);