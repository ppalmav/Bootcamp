"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

class LinkedList {
 constructor(){
    this.head = null;
  }
}

class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

LinkedList.prototype.add = function(data) {
  var node = new Node(data);
  let current = this.head;
  // Si está vacia
  if (current===null) {
  this.head = node;
  return node;
  }
  // Si no esta vacia, recorro hasta encontrar el último
  while (current.next) {
  current = current.next;
  }
  current.next = node;
  }

  LinkedList.prototype.remove = function() {
    let current = this.head, valor;
    // Si está vacia
    if(current===null){ // Si current = null  //null=false  !null=true
      //console.log('La lista esta vacia!')
      return false;
      }
    //si tiene un solo elemento
    if(this.head.next===null){
      valor=this.head.value;
      this.head = null;
      return valor;
    }
    // Si no esta vacia, recorro hasta encontrar el penúltimo
    while (current.next.next) {
    current = current.next;
    }
    valor=current.next.value;
    current.next = null;
    return valor;
    }

  LinkedList.prototype.search = function(valor){ ///TRABAJAR
  let current = this.head //empezamos en la cabeza
  if(!current){
  //console.log('La lista esta vacia!')
  return null
  }
  if(typeof valor === 'function'){
    //console.log("ES FUNCION")
    while(current){
      if(valor(current.value)){
        return current.value;
      }
      current = current.next;
      }
      return null;
  }
  else /*if(typeof valor === 'string')*/{
    while(current){
    if(current.value===valor){
      return valor
    }
    current = current.next;
    }
    return null;
  }
}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
class HashTable {
  constructor(Buckets=35){
    this.numBuckets = Buckets;
    this.table =[Buckets];
    for (let index = 0; index < Buckets; index++) {
      this.table[index]= new Array;
    }

  }

}
HashTable.prototype.set=function(clave,valor){
  
  this.table[this.hash(clave)].push({clave:clave,valor:valor});
  //console.log(this.table[this.hash(clave)]);
}

HashTable.prototype.get=function(clave){
  let val;
  this.table[this.hash(clave)].forEach(element => {
    console.log(element.clave + "=clave y valor= "+ element.valor)
    if(element.clave===clave){
      val= element.valor;
    }
  });
  return val;
  //console.log("valor=" +val)
}

HashTable.prototype.hasKey=function(clave){
  let val=false;
  this.table[this.hash(clave)].forEach(element => {
    //console.log(element.clave + "=clave y valor= "+ element.valor)
    if(element.clave===clave){
      val= true;
    }
  });
  return val;
  //return this.table[this.hash(clave)].hasOwnProperty(clave);
}

HashTable.prototype.hash=function(str){
  let sumCod=0,strArr=[];
  strArr=str.split('');
  strArr.forEach(char => {
    sumCod += char.charCodeAt()
  });
  let indice=sumCod%this.numBuckets;
  return indice;
}




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
