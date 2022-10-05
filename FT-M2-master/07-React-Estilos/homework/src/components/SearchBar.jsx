import React from 'react';
import style from './SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return( <div className={`${style.searchContainer}`}>
      <input type="text" placeholder='Buscar Ciudad...' className={`${style.inputSearch}`} />
      <button onClick={() => props.onSearch('Buscando...')} className={`${style.searchBtn}`}>Agregar</button>
    </div>)
};