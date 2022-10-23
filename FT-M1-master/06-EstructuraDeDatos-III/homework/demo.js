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
    if(this.left === null && this.right===null){
      return 1
    }
    else if(this.left !== null && this.right===null){
      return this.left.size() + 1
    }
    else if(this.left === null && this.right!==null){
      return this.right.size() + 1
    }
    else if(this.left !== null && this.right!==null){
      return this.left.size() + this.right.size() + 1
    }
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
      console.log("no hay nodos"+this.value)
      if(this.value===valor) {console.log(""+this.value); return true}
      else {console.log(""+this.value); return false} 
    }
    else if (this.left && !this.right){ //solo hay nodo a la izq
      if(valor<this.value){ console.log("valor menor solo nodo a la izq"+this.value); return this.left.contains(valor)}
      else {
        console.log("valor mayor solo nodo a la izq"+this.value+valor)
        if(this.value===valor){ console.log(""+this.value); return true}
        else return false 
      }
    }
    else if (!this.left && this.right){ //solo hay nodo a la der
      if(this.value<valor){ console.log("valor mayor solo nodo a la der"+this.value); return this.right.contains(valor)}
      else {
        console.log("valor menor solo nodo a la der"+this.value)
        if(this.value===valor) return true
        else return false 
      }
    }
    else if (this.left && this.right){ //hay nodos en ambos lados
      console.log("Nodo a ambos lados"+this.value)
      if(this.value<valor) return this.right.contains(valor)
      if(this.value===valor) return true
      else return this.left.contains(valor) 
    }
  }
  
  BinarySearchTree.prototype.depthFirstForEach= function (){}
  
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

  let nodo = new BinarySearchTree(2)
  nodo.insert(22)
  nodo.insert(19)
  nodo.insert(20)
  nodo.insert(18)
  nodo.insert(17)
  nodo.insert(21)

  var arreg = [];
  console.log(nodo.breadthFirstForEach(function(val){ arreg.push(val)}))
  console.log(nodo)

  console.log(nodo.contains())
