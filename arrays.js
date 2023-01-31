var frutas = ["manzana", "platano", "cereza", "fresa"];
console.log(frutas)
//para ver la longitud 
console.log(frutas.length)
//aqui entro a la parte de cereza
console.log(frutas[2]);
//con este agregamos uvas con el .push
var masFrutas = frutas.push("uvas");
//esto eliminaria a uvas del array
var ultimo = frutas.pop("uvas");
//unshift es lo mismo que push pero en vez de ir al final de todo va al comienzo del array
var longitud = frutas.unshift("uvas")
//shift sirve para borrar el que esta de primero creo
var borrarFruta = frutas.shift("manzana");
//te trae la posicion en este caso seria 2
var posicion = frutas.indexOf("cereza");
