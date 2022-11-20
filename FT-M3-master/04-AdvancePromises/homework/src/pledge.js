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
    this._handlerGroups = []

    this._internalResolve = (data) => {
    
        if(this._state === STATE_PENDING){
            this._state = STATE_FULLFILLED;
            this._value = data;
            this._callHandlers(this._value)
        }
        
    }

    this._internalReject = (reason) => {

        if(this._state===STATE_PENDING){
            this._state = STATE_REJECTED;
            this._value=reason;
            this._callErrorHandlers(this._value)
        }
    }
    this._callHandlers = (value) => {
        while(this._handlerGroups.length>0 && typeof this._handlerGroups[0].successCb === TYPE_FUNCTION) 
            this._handlerGroups.shift().successCb(value);
    }
    this._callErrorHandlers = (value) => {
        while(this._handlerGroups.length>0 && typeof this._handlerGroups[0].errorCb === TYPE_FUNCTION)
            this._handlerGroups.shift().errorCb(value);
    }

    executor(this._internalResolve,this._internalReject)

    this.then = (succesH,errorH) => {
        if(typeof succesH !== TYPE_FUNCTION) succesH=false
        if( typeof errorH !== TYPE_FUNCTION) errorH=false
        
        this._handlerGroups.push({successCb:succesH,errorCb:errorH})
        switch (this._state){
            case STATE_FULLFILLED:
                this._callHandlers(this._value)
                break;
            case STATE_REJECTED:
                this._callErrorHandlers(this._value)
                break;
            default:
        }           
    }

    this.catch = (err) => {
        this.then(null,err)
    }
}





// let prom1 = new $Promise( (res,rej) => {
    
//     return res('promesa1')
// })

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
