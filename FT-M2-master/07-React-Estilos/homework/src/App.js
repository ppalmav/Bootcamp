import React from 'react';
import './App.css';
//import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data from './data.js';

function App() {
  return (
    <div className="App">
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      <hr />
      {/* <div>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div> */}
        <Cards
          cities={data}
        />
      <hr />
      
    </div>
  );
}

export default App;
