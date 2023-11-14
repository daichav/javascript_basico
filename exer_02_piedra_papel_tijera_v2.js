// JUEGO PIEDRA-PAPEL-TIJERAS V2

//  preguntar su nombre
let mensaje_inicial = `
¡Vamos a jugar al Piedra-Papel-Tijeras!

Me llamo PC y tu?
`
 
let nombre_jugador = prompt(mensaje_inicial)

let menu = `
OPCIONES DEL JUEGO
==================
Hola ! ${nombre_jugador} elige el número correspondiente 
a la jugada que prefieres.

1 - Piedra
2 - Papel
3 - Tijera

`


// let nombre_jugador = "Asimov"
let jugada_humano = prompt(menu)
let texto_resolucion_partida = ""

// concatenar mensajes
// let string = "A" + "B" + "C"
// let string2 = ""
// console.log("inicialmente string2 vale", string2);
// string += "A"
// console.log(string2);
// string += "B"
// console.log(string2);
// string += "C"
// console.log(string2);




if (jugada_humano == 1) {
    texto_resolucion_partida += `Piedra <-- La jugada de ${nombre_jugador}\n`;
} else if (jugada_humano == 2) {
    texto_resolucion_partida += `Papel <-- La jugada de ${nombre_jugador}\n`;
}  else if (jugada_humano == 3) {
    texto_resolucion_partida += `Tijera <-- La jugada de ${nombre_jugador}\n`;
}

// let fecha = "2023/11/9" 
// console.log(fecha);

// la jugada del PC
let jugada_PC = getRandomInt(1, 4);
if (jugada_PC == 1) {
    texto_resolucion_partida += `Piedra <-- La jugada del PC\n`
} else if (jugada_PC == 2) {
    texto_resolucion_partida += `Papel <-- La jugada del PC\n`
} else {
    texto_resolucion_partida += `Tijera <-- La jugada del PC\n`    
}


//Partida
if (jugada_humano == jugada_PC) {
    texto_resolucion_partida += (`¡Habéis empatado!`);
} else if ((jugada_humano ==1 && jugada_PC == 3) 
            || (jugada_humano == 2 && jugada_PC == 1)  
            || (jugada_humano == 3 && jugada_PC == 2)) {
   texto_resolucion_partida += (`¡Has ganado ${nombre_jugador}!`);
} else {
    texto_resolucion_partida += (`¡Has perdido ${nombre_jugador}!`);
}

alert(texto_resolucion_partida)

// Notesé que también en este caso `min` será incluido y `max` excluido
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  