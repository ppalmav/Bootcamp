import React from 'react';
import Card from './Card';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  if (props.cities) return (<div>
    {
      props.cities?.map( C => (
        <Card 
          key={C.id} //palabra reservada para identificar que componente unico tiene cambios
          max={C.main.temp_max}
          min={C.main.temp_min}
          name={C.name}
          img={C.weather[0].icon}
          onClose={() => alert(C.name)}
        />
       ) )
       //<h3>No hay ciudades para mostrar</h3>
    }

    </div>)
    else return <h3>No hay ciudades para mostrar</h3>
};