let menu = `
OPCIONES DEL JUEGO
==================
Elige el número correspondiente a 
la jugada que prefieres.

1 - Piedra
2 - Papel
3 - Tijera

`


let nombre_jugador = "Asimov"
let jugada_humano = 1

if (jugada_humano == 1) {
    console.log(`Piedra <-- La jugada de ${nombre_jugador} `)
} else if (jugada_humano == 2) {
    console.log(`Papel <-- La jugada de ${nombre_jugador} `);
}  else {
    console.log(`Tijera <-- La jugada de ${nombre_jugador} `);
}

let fecha = "2023/11/9" 
console.log(fecha);

// la jugada del PC
let jugada_PC = getRandomInt(1, 4);
if (jugada_PC == 1) {
    console.log(`Piedra <-- La jugada del PC`)
} else if (jugada_PC == 2) {
    console.log(`Papel <-- La jugada del PC`)
} else {
    console.log(`Tijera <-- La jugada del PC`)    
}



if (jugada_humano == jugada_PC) {
    console.log(`¡Habéis empatado!`);
} else if ((jugada_humano ==1 && jugada_PC == 3) 
            || (jugada_humano == 2 && jugada_PC == 1)  
            || (jugada_humano == 3 && jugada_PC == 2)) {
    console.log(`¡Has ganado ${nombre_jugador}!`);
} else {
    console.log(`¡Has perdido ${nombre_jugador}!`);
}

// Notesé que también en este caso `min` será incluido y `max` excluido
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  