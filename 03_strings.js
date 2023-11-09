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
// nombre = nombre[0].toUpperCase() + nombre.toLowerCase()

// charAt obtiene el caracter en la posición indicada
console.log(nombre.charAt(2));
// console.log(nombre [2]);
// slice corta desde la posicion indicada
console.log(nombre.slice(1));

console.log(nombre.charAt(0).toUpperCase());
console.log(nombre.slice(1).toLowerCase());
console.log(nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase());

let nombre_completo = "     Pérez González, María   "
let nombre_sin_espacios = nombre_completo.trim();

console.log(nombre_sin_espacios);

let nombre_arreglado = nombre_sin_espacios.split(", ")

nombre_arreglado = nombre_arreglado[1] + " " + nombre_arreglado[0] 
console.log(nombre_arreglado);


// EJERCICIO "Hoy es 8 del 11 del 2023 a partir de 
let fecha = "2023/11/8"

let array_fecha = fecha.split("/")
console.log(array_fecha);

console.log(`Hoy es ${array_fecha[2]} del ${array_fecha[1]} del ${array_fecha[0]}`);
// let fecha_ejercicio = fecha_ejercicio[2] + "del" + fecha_ejercicio[1] +"del"+ fecha_ejercicio[0] 




// si quieres saber el length, cuenta los espacios, pero no nos interesan. 
// Para quitar los espacios se utiliza trim()