'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
let sum=0; //variable que guardará la suma mientras se recorre el numero binario
num=num.split("").reverse().join(""); //invierte el string, pasandolo a arreglo primero
//para empezar recorriendo "num" desde el bit de menor valor
for (let i=0;i<num.length;i++){ //empezamos desde el inicio ya invertido
  sum+=Math.pow(2,i)*num[i];//sumo lo que llevo convirtiendo
  //junto con la potencia de 2 segun la posición del bit y mult por el valor del bit
}
return sum;
}

function DecimalABinario(num) {
  // tu codigo aca
  
let arr =[], i=0; //defino un arreglo para guardar los bit y contador
while(num>=1){ //mientras la division sea mayor o igual a 1
  arr[i++]=num%2; //guardo el valor del modulo desde el bit de mayor valor 
  //(habra que invertir el arreglo al final)
  num=Math.floor(num/2); //luego divido el numero para continuar con el siguiente bit
}
return (arr.reverse().join("")); //invierto el arreglo y lo uno para devolver el numero binario como string
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}