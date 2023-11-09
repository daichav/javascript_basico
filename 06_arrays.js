// Arrays-Arreglos lista de cosas colección de datos
// variables de cualquier tipo, una lista datos aislados que tengo agrupados
// el array se crea como una variable con let

let array_1 = ["Anna", "Sara", "John"]// la coma separa los elementos de la lista, sitenemos elementos diferentes, tienen que ir separados por comas
// console.log(typeof array_1);

let nombre= "Pep"
console.log((nombre.length));
console.log(nombre[1]);
console.log(array_1.length);

// listado de frutas
let platano = "platano" 
let array_frutas = ["Mango", "Pera", "Cereza", platano, "castaña"]
console.log(array_frutas[3]);
console.log(array_frutas.length)// te cuenta los elementos que tienes;
// Como obtengo el ultimo elemento del array
console.log(array_frutas[array_frutas.length - 1]);// "tantos como haya menos 1"como obtener el último elemento de la lista
array_frutas[2] = "naranja"
console.log(array_frutas)
// en programacion hay elementos que son mutables 
// y otros que son inmutables, en Js casi todos los elementos son mutables(se pueden cambiar));

// hay que evitar los bucles infinitos

array_frutas.push("Limones")
console.log(array_frutas);

// push añade elementos al final del array

array_frutas.push("limones")
console.log(array_frutas);

// pop quita el ultimo elemento del array
let ultima_fruta =  array_frutas.pop();
console.log(ultima_fruta);
console.log(array_frutas);
//  este elimina el primer elemento del array

let primera_fruta = array_frutas.shift();
console.log((primera_fruta));
console.log(array_frutas);

let array_frutas_fall = ["mango", "pera", "cereza", "platano", "castaña"]
let array_frutas_sum = ["melocotón", "melón", "sandía"]

// como hacerlo con push
array_frutas_fall.push(array_frutas_sum);
console.log(array_frutas_fall)
let array_unificado = array_frutas_fall.flat();
console.log(array_unificado);


let array_frutas_final = array_frutas_fall.concat(array_frutas_sum);
console.log(array_frutas_final);