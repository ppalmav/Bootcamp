'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  if(num===1) return [1];
  let factores=[1];

  function esPrimo(val){
    if(val<4) return true
    for(let mult=2; mult < Math.floor(val/2 +1 );mult++){
      if(val%mult==0) return false
    }
    return true
  }
let factor
  for (factor = 2; !esPrimo(num) /*factor < Math.floor(num/2 +1 )*/;) { //condicion de termino debiera ser !esPrimo(num)
    if(num%factor==0 && esPrimo(factor)){
      factores.push(factor);
      num/=factor;
    }
    else factor++
    //const element = array[factor];
  }
  factores.push(num);
  //factores.push(factor)
  return factores
}
// console.log(factorear(33))

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let aux;
  for (let bubble = 0; bubble < array.length-1; bubble++) {
    aux=false;
    for (let i = 0; i < array.length-1-bubble ; i++) {
      if( array[i]> array[i+1]){
        aux=array[i];
        array[i]=array[i+1];
        array[i+1]=aux;
      } 
    }
    // console.log(aux)
    if(aux===false) break; //si no hubo swap, estan ordenandos y terminamos la ejecucion
  }
  return array;
    
  }

//  console.log(bubbleSort([5, 1, 4, 2, 8]))
//   console.log(bubbleSort([10, 10, 16, 12]))
//   console.log(bubbleSort([10, -2, -7, 4]))
function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let insertar,i;
  for (let h = 0; h < array.length-1; h++) {
    if(array[h]>array[h+1])
      {
      insertar=array[h+1]
      for (i = h+1; array[i-1]>insertar ; i--) {
        array[i]=array[i-1]
        // console.log(array)
        }
      array[i]=insertar;
      // console.log(array)
      }
    }
    return array
  }
  // console.log(insertionSort([5, 1, 4, 2, 8]))
  // console.log(insertionSort([10, 10, 16, 12]))
  // console.log(insertionSort([10, -2, -7, 4]))

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let sel,aux;
  for (let i = 0; i < array.length-1; i++) {
    sel=i;
    for(let j=i;j<array.length;j++)// console.log("comparando "+ array[sel] +" con "+array[j])
      if(array[sel]>array[j])//console.log("se cambia "+ array[sel] +" con "+array[j]); 
        sel = j; 
        
    //console.log(array[sel])
    if(i!==sel){
      aux=array[sel];
      array[sel]=array[i];
      array[i]=aux;      
    }
  }
  return array
}
  // console.log(selectionSort([5, 1, 4, 2, 8]))
  // console.log(selectionSort([10, 10, 16, 12]))
  // console.log(selectionSort([10, -2, -7, 4]))

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
