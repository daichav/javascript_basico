// JUEGO PIEDRA-PAPEL-TIJERAS v3 
// Revisamos que no haya errores por partes del usuario
let victorias_humano = 0
let empates = 0
let victorias_pc = 0



let nombre_jugador = ""

do {
    // preguntar al usuario su nombre
    let mensaje_inicial = `
¡Vamos a jugar al Piedra-Papel-Tijeras!

Me llamo PC. ¿Y tu?
(debes escribir al menos tres caracteres)
`
    nombre_jugador = prompt(mensaje_inicial)

    if (nombre_jugador != null && (nombre_jugador.trim().length >= 3)) {
        console.log("Condición solucionada");
        break
    } else
        alert("No es un nombre válido\nEscribe al menos tres caracteres")


} while (true)

// console.log(nombre_jugador);

let repetir_partida = true

while (repetir_partida) {

    let menu = `
OPCIONES DEL JUEGO
==================
${nombre_jugador} elige el número correspondiente
a la jugada que prefieres

1 - Piedra
2 - Papel
3 - Tijeras
`
    // Ya tenemos la jugada del humano
    let jugada_humano = parseInt(prompt(menu))
    // alert(typeof jugada_humano)

    // si el usuario escribe 1, 2, 3 jugará, si no, no
    if (jugada_humano == 1 || jugada_humano == 2 || jugada_humano == 3) {
        // alert("Partida finalizada. ¡Hasta pronto!")
    

        let texto_resolucion_partida = ""

        if (jugada_humano == 1) {
            texto_resolucion_partida += `Piedra <-- La jugada de ${nombre_jugador}\n`;
        } else if (jugada_humano == 2) {
            texto_resolucion_partida += `Piedra <-- La jugada de ${nombre_jugador}\n`;
        } else {
            texto_resolucion_partida += `Tijeras <-- La jugada de ${nombre_jugador}\n`;
        }

        // Jugada del PC
        let jugada_PC = getRandomInt(1, 4)
        if (jugada_PC == 1) {
            texto_resolucion_partida += `Piedra <-- La jugada del PC\n`;
        } else if (jugada_PC == 2) {
            texto_resolucion_partida += `Papel <-- La jugada del PC\n`;
        } else {
            texto_resolucion_partida += `Tijeras <-- La jugada del PC\n`;
        }

        // Partida
        if (jugada_humano == jugada_PC) {
            texto_resolucion_partida += `¡Habéis empatado!\n`;
            empates += 1;
        } else if ((jugada_humano == 1 && jugada_PC == 3)
            || (jugada_humano == 2 && jugada_PC == 1)
            || (jugada_humano == 3 && jugada_PC == 2)) {
            texto_resolucion_partida += `¡Has ganado ${nombre_jugador}!\n`;
            victorias_humano += 1;
        } else {
            texto_resolucion_partida += `¡Has perdido ${nombre_jugador}!\n`
            victorias_pc += 1;
        }

        let mensaje_marcador = `\n
        Victorias de ${nombre_jugador}: ${victorias_humano}
        Empates: ${empates}
        Victorias del PC: ${victorias_pc}
        `

        texto_resolucion_partida += mensaje_marcador

        alert(texto_resolucion_partida)
        
    }
    repetir_partida = confirm(`${nombre_jugador}, ¿jugamos otra partida :D?`)
}
alert("Partida finalizada. ¡Hasta pronto!")




// Notesé que también en este caso `min` será incluido y `max` excluido

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
