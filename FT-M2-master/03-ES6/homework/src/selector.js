
const traverseDomAndCollectElements = function(matchFunc, startEl=document.body) {
  let resultSet = [];

  // if (typeof startEl === "undefined") {
  //   startEl = document.body;
  // }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)){ 
    resultSet.push(startEl);
  }
  

  for (let i = 0; i < startEl.children.length; i++) {
    let response = traverseDomAndCollectElements(matchFunc,startEl.children[i]);
    resultSet=[...resultSet,...response];
  }
  return resultSet
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


const selectorTypeMatcher = function(selector) {
  // tu código aquí
  // let arr=selector.trim().split('');
  // //console.log(arr)
  // if(arr[0]==='#') return 'id'
  // if(arr[0]==='.') return 'class'
  // if(arr.includes('.')) return 'tag.class'
  // if(arr.includes('>')) return 'child'
  // if(arr.includes(' ')) return 'tags'
  //console.log(arr)
  if(selector.substring(0,1)==='#') return 'id'
  if(selector.substring(0,1)==='.') return 'class'
  if(selector.includes('.')) return 'tag.class'
  if(selector.includes(' > ')) return 'child'
  if(selector.includes(' ')) return 'tags'
  else return 'tag'

};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

const matchFunctionMaker = function(selector) {
  let selectorType = selectorTypeMatcher(selector);
  let matchFunction;
  if (selectorType === "id") { 
   matchFunction = (startEl)=>{
    return selector.substring(1).toUpperCase() ===startEl.id.toUpperCase();
   };
  } else if (selectorType === "class") {
    matchFunction = (startEl)=>{
      if(startEl.className.includes(' ')){ //si hay varios nombres de clase separados por espacio ' '
        let arr=startEl.className.split(" "); //separarlos y enviarlos a un arreglo
        for(let el of arr){
          if(el===selector.substring(1)) return true //si lo encuentra
        }
        return false //si no lo encuentra
      }
      else return selector.substring(1) ===startEl.className; //si solo es un nombre de clase
     };

  } else if (selectorType === "tag.class") {
    matchFunction = (startEl)=>{

      let matchClass=false,matchTag=false  //flag para reconocer si encuentra clase y tag
      let arrS=selector.split('.')  //separar el tag en arrS[0] y clase en arrS[1]

      if(startEl.className.includes(' ')){ //si hay varios nombres de clase separados por espacio ' '
        let arr=startEl.className.split(" "); //separarlos y enviarlos a un arreglo
        for(let el of arr){ //recorrer cada clase
          if(el===arrS[1]) matchClass=true //si lo encuentra
        }
        //si no lo encuentra mantiene valor false
      }
      else matchClass = selector.substring(1) ===startEl.className?true:false; //si solo hay un nombre de clase

      matchTag= startEl.tagName.toUpperCase() === arrS[0].toUpperCase();
  
      return matchClass && matchTag
     };

  } else if (selectorType === "child") {
    matchFunction = (startEl)=>{
      const [...selectores] = selector.split(' > ').reverse()
      let [nodo,cont] = [startEl,0]
      if(selectores[0].toUpperCase()===startEl.tagName.toUpperCase())
        for (i = 1,cont=1; i < selectores.length; i++) {
          nodo=nodo.parentNode
          if(selectores[i].toUpperCase() === nodo.tagName.toUpperCase()) cont++
        }
      return cont===selectores.length
     };
  } else if (selectorType === "tags") {
    matchFunction = (startEl)=>{
      let [parent,child] = selector.split(' ')
      let [matchP,matchC] = [false,false]
      // matchP=(parent.toUpperCase() === startEl.parentNode.tagName.toUpperCase())
      matchC=(child.toUpperCase()===startEl.tagName.toUpperCase())
      matchP=(startEl.closest(parent.toLowerCase()))
      return matchP && matchC
    };
  } else if (selectorType === "tag") {
    matchFunction = (startEl)=>{
      return selector.toUpperCase() === startEl.tagName.toUpperCase();
     };
  }
  return matchFunction;
};

const $ = function(selector) { //$('#input')
  let elements;
  let selectorMatchFunc = matchFunctionMaker(selector); //selectr
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
