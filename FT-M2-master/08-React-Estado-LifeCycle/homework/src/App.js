import React,{useState} from 'react';
import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx'

export default function App() {
  const [cities, setCities] = useState([]);

  // Const onSearch = (ciudad) =>{

  // }
  

  function onSearch(ciudad) {
    const ciudadEjemplo = {
      min: 32,
      max: 35,
      img: "03n",
      id: 2172797,
      wind: 3.6,
      temp: 300.15,
      name: "Cairns",
      weather: "Clouds",
      clouds: 40,
      latitud: -16.92,
      longitud: 145.77
    };
    setCities(oldCities => [...oldCities, ciudadEjemplo]);

  }

  return (
    <div className="App">
      
      <h1>Weather</h1>
      <Nav onSearch={onSearch}/>
      <Cards/>
    </div>
  );
}
