function saludar(saludo){
    return function (nombre){
        return (function(apellido){
            console.log(saludo+' '+nombre+ ' '+apellido);
        })
    }
}
var saludarNombre=saludar('Hola');
var saludarNombreApellido=saludarNombre('Pablo');
saludarNombreApellido('Palma');
