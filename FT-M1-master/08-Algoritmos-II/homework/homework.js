'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length>1){
    let piv = Math.round(array.length/2);
    let equals=[],left=[],right=[]

    for (let i = 0; i < array.length; i++) {
      if(array[i]>array[piv])       right.push(array[i])
      else if(array[i]<array[piv])  left.push(array[i])
      else equals.push(array[i]) 
    }
    // console.log(left)
    // console.log(equals)
    // console.log(right)
    return quickSort(left).concat(equals).concat(quickSort(right))
  }
  else return array
}
// console.log(quickSort([2,6,3,6,8,99,2,11,5,2]))
// console.log(quickSort([234,65,3,7,3,67,3,76,87,2342,556,234,6,8,453,23]))
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //array=[123,21,432234,12,121]
  if(array.length>1){
    let l=[],r=[]
    // console.log(array.slice(0,Math.floor(array.length/2)))
    // console.log(array.slice(Math.floor(array.length/2),array.length))
    l= mergeSort(array.slice(0,Math.floor(array.length/2)))
    r= mergeSort(array.slice(Math.floor(array.length/2),array.length))
    // console.log(l)
    // console.log(r)
    return merge(l,r)
   
  }
  else
    return array
}
function merge(l,r){
  let array=[]
  while(l.length>0 && r.length>0) {
    if(l[0]<r[0]) array.push(l.shift())
    else array.push(r.shift())
  }

  return array.concat(l,r)
}
// console.log(mergeSort([2,6,3,6,8,99,2,11,5,2]))
// console.log(mergeSort([234,65,3,7,3,67,3,76,87,2342,556,234,6,8,453,23]))
// console.log(2&&5)
// console.log(5&&2)
// console.log(0&&5)
// console.log(2&&0)
// console.log(2||5)
// console.log(5||2)
// console.log(0||5)
// console.log(2||0)
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
