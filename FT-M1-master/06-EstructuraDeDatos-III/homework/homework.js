"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

class BinarySearchTree {
  constructor(v){
    this.value=v;
    this.left=null;
    this.right=null;
  }
}

class Node{
  constructor(v){
    this.value=v;
    this.left=null;
    this.right=null;
  }
}

BinarySearchTree.prototype.size = function (){
  if(!this.left && !this.right){
    return 1
  }
  if(!this.right){
    return this.left.size() + 1
  }
  if(!this.left){
    return this.right.size() + 1
  }
  //else if(this.left !== null && this.right!==null)
  return this.left.size() + this.right.size() + 1
}

BinarySearchTree.prototype.insert = function (valor){
  
  if(!this.left && !this.right){ //si no hay nodos
    if(this.value>valor) this.left = new BinarySearchTree(valor)
    else this.right = new BinarySearchTree(valor)
  }
  else if (this.left && !this.right){ //hay nodo a la izq pero no a la der
    if(this.value>valor) this.left.insert(valor)
    else this.right = new BinarySearchTree(valor)
  }
  else if (!this.left && this.right){ //NO hay nodo a la izq pero sí a la der
    if(this.value<valor) this.right.insert(valor)
    else  this.left = new BinarySearchTree(valor)
  }
  else if (this.left && this.right){
    if(this.value<valor) this.right.insert(valor)
    else this.left.insert(valor)
  }
}

BinarySearchTree.prototype.contains = function (valor){
  if(!this.left && !this.right){ //si no hay nodos
    if(this.value===valor) return true
    else return false 
  }
  else if (this.left && !this.right){ //hay nodo a la izq pero no a la der
    if(this.value>valor){ return this.left.contains(valor)}
    else {
      if(this.value===valor) return true
      else return false 
    }
  }
  else if (!this.left && this.right){ //NO hay nodo a la izq pero sí a la der
    if(this.value<valor){ return this.right.contains(valor)}
    else {
      if(this.value===valor) return true
      else return false 
    }
  }
  else if (this.left && this.right){
    if(this.value<valor) return this.right.contains(valor)
    if(this.value===valor) return true
    else return this.left.contains(valor) 
  }
}

BinarySearchTree.prototype.depthFirstForEach = function (cb , recorrido = 'in-order'){
  if(recorrido==='in-order'){
    //if(!this.left && !this.right) cb(this.value)//si no hay nodos 
    if(this.left) this.left.depthFirstForEach(cb)
    cb(this.value)
    if(this.right) this.right.depthFirstForEach(cb) 
  }
  else if(recorrido==='pre-order'){
    cb(this.value)
    this.left && this.left.depthFirstForEach(cb,recorrido)
    this.right && this.right.depthFirstForEach(cb,recorrido) 
  }
  else{
    this.left && this.left.depthFirstForEach(cb,recorrido)
    this.right && this.right.depthFirstForEach(cb,recorrido)
    cb(this.value)
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb,arr){
  //primero muestra
  //luego va a la izq y muestra
  //luego a la derecha y muestra
  //luego al hijo izq de la izq y muestra luego al hijo derecha de la izq y muestra
  //luego al hijo izq de la der y muestra luego al hijo derecha de la derecha y muestra
  cb(this.value)
  if( arr===undefined /*|| arr===null*/){
    arr = []
  }

  if(this.left) arr.push(this.left)
  if(this.right) arr.push(this.right)

  arr.length && arr.shift().breadthFirstForEach(cb,arr)
  // this.left && this.left.breadthFirstForEach(cb)
  // this.right && this.right.breadthFirstForEach(cb)
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
