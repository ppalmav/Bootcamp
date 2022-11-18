'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:
const STATE_PENDING = 'pending'
const STATE_REJECTED ='rejected'
const STATE_FULLFILLED ='fulfilled'
const TYPE_FUNCTION ='function'
const ERROR_EXECUTOR_NOT_FUNCTION = "Executor is not a function" 

function $Promise(executor){
    if(typeof executor !== TYPE_FUNCTION){
        throw new TypeError(ERROR_EXECUTOR_NOT_FUNCTION);
    }
    this._state = STATE_PENDING
    this._value = undefined

    this._internalResolve = (data) => {

        if(this._state===STATE_PENDING){
            this._state = STATE_FULLFILLED;
            this._value=data;
        }
        //console.log('state en internalresolve='+this._state)
        return 'Temporarily disabled'
    }

    this._internalReject = (reason) => {

        if(this._state===STATE_PENDING){
            this._state = STATE_REJECTED;
            this._value=reason;
        }
        //console.log('state en internalresolve='+this._state)
        return 'Temporarily disabled'
    }

    executor(this._internalResolve,this._internalReject)
}





let prom1 = new $Promise( (res,rej) => {
    
    return res('promesa1')
})

module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
