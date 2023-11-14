// WHILE

let llueve = true
while (llueve){
    for(let i = 1; i<= 5; i++){
        console.log(`Hoy es ${i} y está lloviendo`)
        if (i ==5){
            console.log(`Ya ha dejado de llover`);
            llueve = false

        }
    }
}

// do while
// 
// do {
//  codigo   
// } while (condicion) {


// })

// do {
//     estudiar javascript
// }while (condicion);

let frutas = ["plátano", "naranja", "limón", "mango"]

for (let i = 0; i < frutas.length; i++) {
    console.log(`${i + 1}. ${frutas[i]}`);
}


let i = 0;
while (i < frutas.length){
    console.log(`${i + 1}. ${frutas[i]}`);
    i++
}
// 3 fases de la programación
// 1.- Requerimientos = tengo que saber que tengo que hacer
// 2.- Codigo = hacer lo que tengo que hacer
// 3.- Test 
// 
// 