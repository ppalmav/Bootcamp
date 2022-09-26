// function saludar(saludo){
//     return function (nombre){
//         return (function(apellido){
//             console.log(saludo+' '+nombre+ ' '+apellido);
//         })
//     }
// }
// var saludarNombre=saludar('Hola');
// var saludarNombreApellido=saludarNombre('Pablo');
// saludarNombreApellido('Palma');

// function imprimir(j){
//     return function(){console.log(j);}
// }
// var creaFuncion=function(){
//     var arreglo=[];
//     for (var i = 0; i < 3; i++){
//         arreglo.push(
//             (//imprimir(i)
//             function(j){
//                 return function(){console.log(j);}
//             }(i)
//             )
//         )
//     }
//     return arreglo;
// }
// var arr=creaFuncion();

// arr[0]()
// arr[1]()
// arr[2]()


///////BIND
var persona = {
    nombre:'Guille',
    apellido:'Aszyn'
}

var logNombre = function(){
    console.log(this.nombre);//Guille
}

var logNombrePersona = logNombre.bind(persona); //se puede autoinvocar haciendo bind(algo)();
// BIND asocia persona a la función, asi en el ejemplo, this tiene el valor del objeto persona
// BIND devuelve una función
logNombrePersona();

function multiplica(a,b){
    console.log(a*b)
    return a*b;
}

var multiplicaPorDos= multiplica.bind(this,2);
multiplicaPorDos(4)

