// Preguntar la edad
// crear variable
let edad = prompt("¿Cuál es tu edad?")// Formulario pequeño para que el usuario lo responda, dentro de las ventanas hay strings, cadenas de texto "..."
// alert(edad + 10)// javasript lo concatena
// necesito saber si el usuario ha escrito algo que se puede convertir a número
// alert(typeof edad) ** esta es una linea de seguimiento, nuestro programa no lo necesita, por eso se comenta 

if ((edad == null) || (edad == "") || (isNaN(edad))) {
    alert("Debes escribir tu edad correctamente")
} else {
    if (edad < 18) {
    alert(`Tienes ${edad} años\ny eres menor de edad`) //\n es un salto de línea, secuencas de escape, depende de donde la apliques sirve para cosas diferente  
} else {
    alert(`Tienes ${edad} años 
y eres mayor de edad`)// `` para hacer un salto de linea solo poner enter, estas comillas mantienen el formato que tienes
}}

// parseInt(string, base);
// probar los limites y condiciones, por que ahi se concentran los errores