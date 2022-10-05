import React from 'react';

export default function Card({name,min,max,onClose,img}) { //o props y {props.name} .. etc
  // acá va tu código
  return (<div>
    <button onClick={onClose}>X</button>
    <h3>{name}</h3>
    <p>Min</p>
    <p>{min}</p>
    <p>Max</p>
    <p>{max}</p>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img Not found" />
  </div>)
};