import React from "react"
// import { NavLink } from "react-router-dom"
import './Ciudad.css'

export default function ciudad({city}){
    // console.log(city)
    if(city!==null){
        return(
            <div className="ciudad">
                    <div className="container">
                        <h2>{city.name}</h2>
                        <div className="info">
                            <div>Temperatura: {city.temp} ºC</div>
                            <div>Clima: {city.weather}</div>
                            <div>Viento: {city.wind} km/h</div>
                            <div>Cantidad de nubes: {city.clouds}</div>
                            <div>Latitud: {city.latitud}º</div>
                            <div>Longitud: {city.longitud}º</div>
                        </div>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className="ciudad">
                    <div className="container">
                        <h2>Esta ciudad no se encuentra registrada</h2>
                </div>
            </div>
        );
    }
    
}
