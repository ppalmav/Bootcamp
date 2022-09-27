const { LinkedList } = require('./DS');

// No modifiques nada arriba de esta linea //
/*
  EJERCICIO 1
   Agregar el método sortList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
   Si la lista está vacía, debe retornar false;
   Ejemplo:
     Suponiendo que la lista actual es: Head --> [8] --> [12] --> [3] --> [16]
     LinkedList.sortList();
     Ahora la lista quedaría: Head --> [16] --> [12] --> [8] --> [3]
*/

LinkedList.prototype.sortList = function () {
  // Tu código aca:
  if (this.head === null)
    return false; 
  else{
    let currentNode = this.head,arrVal=[],i=0,aux;
    while(currentNode){
      arrVal[i++]=currentNode.value;
      currentNode=currentNode.next;
    }
    //console.log(arrVal);
    for (let bubble = 0; bubble < arrVal.length; bubble++) {
      for (i = 0; i < arrVal.length-bubble; i++) {
        if (arrVal[i]<arrVal[i+1]){
          aux=arrVal[i];
          arrVal[i]=arrVal[i+1];
          arrVal[i+1]=aux;
        }
      }
    }
    //console.log(arrVal);
    i=0,currentNode=this.head;
    while(currentNode){
      currentNode.value=arrVal[i++];
      currentNode=currentNode.next;
    }
    return LinkedList;
  }
}

// No modifiques nada debajo de esta linea //

module.exports = {
  LinkedList
};