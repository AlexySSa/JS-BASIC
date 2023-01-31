var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
    console.log(estudiantes)
    var estudiante = estudiantes.shift(); 
    saludarEstudiantes(estudiante);
}

/*

El método shift en JavaScript es una función que se puede aplicar a un array
para eliminar el primer elemento del array y devolver ese elemento. En este código,
el método shift se está utilizando dentro de un bucle while para ir eliminando un
elemento a la vez de la lista de estudiantes.

Cada vez que se ejecuta el bucle, se asigna el primer elemento del array
estudiantes a la variable estudiante, y luego se llama a la función saludarEstudiantes
con ese elemento como argumento. Después, se llama a shift para eliminar ese elemento 
del array.

El bucle se detendrá cuando la longitud del array estudiantes se vuelva 0,
ya que el bucle while solo se ejecutará mientras la condición sea verdadera.

*/