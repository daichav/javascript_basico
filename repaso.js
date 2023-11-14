
// IMPORTANTE
// JS es sensible a las mayúsculas y minúsculas
// las palaras reservadas siempre van en minúsculas

// VARIABLES

// Palabra reservada let crea una variable
// con el signo = le damos un valor
let nombre = "Anna"
let NOMBRE = "Anna"// nombre diferente de NOMBRE, por que js es sensible a mayúsculas y minúsculas
let color // creación de la variable
color =  "verde"// asignar varlor a la variable

let uno, dos, tres
uno = 1
dos = 2

let cuatro = uno + dos

console.log(cuatro);


//También existe la posibilidad de crear
// una varable con la palabra var

var ciudad = "Cornellà"
var ciudad = "Esplugues"// el valor que se impone es el último

// con var se puede escribir dos variables con el mismo nombre 
// y diferente valor, pero con let no se puede

let comida = "pizza, pan"
// for nos permite iterar (pasar de un valor a otro)
for (let i = 0; i < comida.length; i++) {//i = donde empieza a recorrer el elemento 
    // ; despues hasta donde quieres que recorra comida.lenght i++ indice que se va incrementando de uno en uno
    console.log(comida[i]);
}

let texto= "soy un texto"// tipo String
let entero = 1           // tipo Number
let decimal = 1.0        // tipo Number
let booleano = true      // tipo Boolean

entero += 2 // una variable se incrementa a si misma
console.log(entero);

texto += "y hoy es viernes"// concatena 
console.log(texto);

// VENTANAS EMERGENTES ** esto esta comentado porque las alertas no funcionan con quokka y da error**
// hay tres tipos de ventanas
// alert(mensaje de tipo string)// ventana a nivel informativo
// let confirmacion = confirm(mensaje)// devuelve true o false
// let pregunta =  prompt(mensaje)// permite recibir una respuesta, un pequeño formulario

// ESTRUCURAS DE CONTROL
// if (condicion)
// cuando utilices el if definir la condición fuera del if primero  

let frio = false
if (frio) {
    console.log("Hace frío");
} else {
    console.log("No hace frío");
}

let dia = "viernes"
if (dia == "lunes"){
    console.log("Hoy es lunes");
} else if (dia == "martes"){
    console.log("Hoy es martes");
} else{
    console.log("Hoy no es ni lunes ni martes");
}// else todas las condiciones que no estan nombradas

let prueba1 = "a"; let prueba2 ="b";// sirve para separar variables

let tiempo =  "llueve"
let contador = 0 
while (contador < tiempo.length){ // tiempo.length esto es un numero
    console.log("llueve");// hasta aqui es un bucle infinito
    contador++
}

let contador2 = 1 
while(true){
    console.log("llueve");
    if (contador2 == 5){
        break//corta, interrumpe
    }
    contador2++ 
}
