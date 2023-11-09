// BUCLE FOR "CLÁSICO"
// for+(tantas veces como dice aqui)+{se va a ejecutar}

//  for(let i=0; i<array.lenght; i++) 

let array_frutas = ["mango", "pera", "cereza", "plátano", "castaña"]
let array_frutas_may = []


//  los elementos iterativos
for (let i=0; i<array_frutas.length; i++) {  // i= es el valor inicial i++ el incremento  (i+1 = i++) i+=2(de dos en dos)
    console.log(array_frutas[i]);
    
    array_frutas[i]
    console.log(array_frutas[i].charAt(0).toUpperCase() + array_frutas[i].slice(1).toLowerCase());
    array_frutas_may.push(array_frutas[i].charAt(0).toUpperCase() + array_frutas[i].slice(1).toLowerCase());
        // 
}
console.log(array_frutas_may);
// i "iterador"

for (let i=0; i<array_frutas_may.length; i++) {
    // console.log(array_frutas_may[i]);
    // let fruta_corr = array_frutas[i].charAt(0).toUpperCase() + array_frutas[i].slice(1).toLowerCase(); // preguntar copiar codigo del profe
    // array_frutas_may[i] = fruta_corr
    // array_frutas_may.push(fruta_corr);

}
console.log(array_frutas_may);



