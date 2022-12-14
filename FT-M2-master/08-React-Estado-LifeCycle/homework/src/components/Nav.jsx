import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div>
      <img src={Logo} alt="Logo Henry" />
      <span>Henry - Weather App</span>
      <SearchBar/>
    </div>
    );
};

export default Nav;
