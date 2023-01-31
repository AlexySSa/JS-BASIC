//for de impresion de nombres
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]

function saludarEstudiantes(estudiante){
    console.log(`hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}


//aqui funciona con for of
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]

function saludarEstudiantes(estudiante){
    console.log(`hola, ${estudiante}`);
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}
