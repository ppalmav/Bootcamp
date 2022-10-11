import React, { useState } from 'react';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import { Route } from 'react-router-dom';
import About from '../components/About.jsx';
import Ciudad from '../components/Ciudad';

const apiKey = '017e2ef2ba480dcdd5b77b4466095c64'; //propia

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        let existeCiudad=onFilter(recurso.id)
        if(recurso.main !== undefined && existeCiudad===null){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else if(existeCiudad!==null) {
          alert("Ciudad ya agregada");
        }
        else{
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div className="App">
      <Route path='/'
            render = {()=><Nav onSearch={onSearch}/>} />
      <hr />
      <Route path='/'
            render = {()=><Cards
                            cities={cities}
                            onClose={onClose}
                          />} />
      <Route exact path='/about' component={About} />
      <Route exact path='/ciudad/:ciudadId'
            render = {({match})=> <Ciudad 
                                  city={onFilter(match.params.ciudadId)} />} />
    
    </div>
  );
}

export default App;
