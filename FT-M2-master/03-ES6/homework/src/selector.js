
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
  let arr=selector.trim().split('');
  //console.log(arr)
  if(arr[0]==='#') return 'id'
  if(arr[0]==='.') return 'class'
  if(arr.includes('.')) return 'tag.class'
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
      
      return matchClass===true && matchTag===true
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
