import React from 'react';
import style from './Card.module.css'

export default function Card({name,min,max,onClose,img}) { //o props y {props.name} .. etc
  // acá va tu código
  return (<div className={`${style.cardWrapper}`}>
    <div className={`${style.buttonCard}`}>
    <button onClick={onClose} className={`${style.btnCerrar}`} >X</button>
    </div>
    <h3>{name}</h3>
    <div className={`${style.infoCard}`}>
    <div>
    <p >Min</p>
    <p>{min}°</p>
    </div>
    <div >
    <p>Max</p>
    <p>{max}°</p>
    </div>
    <div>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img Not found" />
    </div>
    </div>
  </div>)
};