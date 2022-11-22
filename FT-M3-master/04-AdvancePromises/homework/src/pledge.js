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
            this._callHandlers()
        }
        
    }

    this._internalReject = (reason) => {

        if(this._state===STATE_PENDING){
            this._state = STATE_REJECTED;
            this._value=reason;
            this._callHandlers()
            //this._callErrorHandlers(this._value)
        }
    }
    this._callHandlers = () => {
        
         let HANDLER, INTERNAL_R
        while(this._handlerGroups.length>0){
            let hndGrp = this._handlerGroups.shift();
            switch (this._state){ //callhandler es llamado con fulfilled o rejected
                case STATE_FULLFILLED:
                    HANDLER = 'successCb'
                    INTERNAL_R = '_internalResolve'
                    break;
                default:  //STATE_REJECTED
                    HANDLER = 'errorCb'
                    INTERNAL_R = '_internalReject'
            }
            if(!hndGrp[HANDLER]){ // o typeof hnd... !== TYPE_FUNCTION
                hndGrp.downstreamPromise[INTERNAL_R](this._value)
            } else {
                try {
                    let returnH = hndGrp[HANDLER](this._value)
                    if(returnH instanceof $Promise){
                        returnH.then(
                            (value) => hndGrp.downstreamPromise._internalResolve(value)
                            ,
                            (err) => hndGrp.downstreamPromise._internalReject(err)
                          );
                    }  
                    else if(typeof returnH !== TYPE_FUNCTION)
                        hndGrp.downstreamPromise._internalResolve(returnH)
                } catch (error) {
                    hndGrp.downstreamPromise._internalReject(error)
                }
            }           
        }     
    }

    executor(this._internalResolve,this._internalReject)

    this.then = (succesH,errorH) => {
        if(typeof succesH !== TYPE_FUNCTION) succesH=false
        if( typeof errorH !== TYPE_FUNCTION) errorH=false

        let downstreamPromise = new $Promise(() =>{})
        this._handlerGroups.push({successCb:succesH,errorCb:errorH,downstreamPromise})
        
        if (this._state !== STATE_PENDING) this._callHandlers()
        return downstreamPromise         
    }

    this.catch = (err) => {
        return this.then(null,err)
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
