// function hola(){
//     let x=5;

//     if(true){
//         x=6;

//         const z=3;
//     }

//     z='hola';
//     console.log(x);
// }

// hola();

// var creaFuncion = function(){
//     var arreglo = [];
//     for ( var i=0; i < 3; i++){
//     arreglo.push(
//     function(){
//     console.log(i);
//     }
//     )
//     }
//     return arreglo;
//     }
//     var arr = creaFuncion();

//     arr[0]() // 3
//     arr[1]() // 3
//     arr[2]() // 3


// const suma =(a,b) =>{return a+b};

// console.log(suma(5,4));

//var pares = impares.map(v => v + 1);
// var nums = [1, 2, 3, 4, 5]//pares.map((v, i) => console.log( v + i));

// nums.forEach(v => {
//     if(v%5===0)
//         cincos.push(v)
// });

// const hi = (saludo) => console.log('hola ' + saludo);

// hi('Awena');

// var array = ['hi', 'hola', 'bye', 'chau']

// // const saludo = array.filter(el => el === 'hola' ? el : '');

// const saludo = array.filter(el => el === 'hola');

// console.log(saludo) //['hola']



// class Persona {
//     constructor (nombre = 'FT', apellido = "31-C"){
//         this.nombre = nombre,
//         this.apellido = apellido
//     }
//     getNombre() {
//         return this.nombre + " " + this.apellido;
//     }
// }
// class Empleado extends Persona {
//         constructor (nombre, apellido, empleo, sueldo){
//             super(nombre, apellido);
//             this.empleo = empleo;
//             this.sueldo = sueldo;
//     }
//     getEmpleo() {
//         return this.empleo + "($" + this.sueldo + ")";
//     }
// }


// var obj = {
//     // __proto__
//     __proto__: theProtoObj, //extiende el prototipo
//     propiedad, // atajo para propiedad:propiedad
//     // Methods
//     toString() {
//     // Super calls
//     return "d " + super.toString();
//     },
//     // Computed (dynamic) property names
//     [ 'prop_' + (() => 42)() ]: 42
//     };


// function obj(name,hola){
//     let object={name,hola, [ 'prop_' + (() => 42)() ]: 42 } //{name : <name>, hola: <hola>, prop_42: 42}
//                                     // (funcion arrow)() que se instancia al momento con los parentesis y se concatena con 'prop_'
//     return object;
// }

// console.log(obj('Pablo','hi'))


// // Basic literal string creation
// `In JavaScript '\n' is a line-feed.`
// // Multiline strings
// `In JavaScript this is
// not legal.`
// // String interpolation
// var name = "Bob", time = "today";
// `Hello ${name}, how are you ${time}?`
// // Construct an HTTP request prefix is used to interpret
// // the replacements and construction
// POST`http://foo.org/bar?a=${a}&b=${b}
// Content-Type: application/json
// X-Credentials: ${credentials}
// { "foo": ${foo},
// "bar": ${bar}}`(myOnReadyStateChangeHandler);

// let [x,y,z]=[1,2,3]
// console.log("" + x + y + z) //123

////MUY USADO!!!!!!!!!!!!!!!
// let object={a:1,b:2}
// let {a,b}=object; //tiene que ser el mismo nombre de la prop
// console.log("" + a+b) // '12'  // a y b se convierten en variables

// function saludo(saludo = 'hola'){
//     let name = 'FT-31C'
//     return `${saludo} ${name}` //para devolver saludo y name
// }
// console.log(saludo())
// console.log(saludo('hi'))

// function saludo(x, ...y){
//     console.log(y) //
//     return x + y.length  // 1 que es primer valor + 7 que son la cantidad de otros argumentos
// }
// console.log(saludo(1,2,3,4,5,6,7,8))

// function saludo(){
//     let arr=[1,2,3]
//     let arr1=[4,5,6]
//     let arr2=['hola',{a:3}]
//     return [...arr,...arr1, ...arr2] 
// }
// console.log(saludo())