import React, {useState} from "react";
import { dataplanets } from "../constants/data_planets";

export function Info({handleClick, name}) {
  if (dataplanets[name]) {
    return (
      <div className="details">
        { dataplanets[name].name && <h3>{dataplanets[name].name}</h3>}
        { dataplanets[name].name && <p>Diameter: {dataplanets[name].diameter}</p>}
        { dataplanets[name].distance_from_sun && <p>Distance from sun: {dataplanets[name].distance_from_sun}</p>}
        { dataplanets[name].rotation && <p>Orbital rotation: {dataplanets[name].rotation}</p>}
        { dataplanets[name].period_of_revolution && <p>Period of revolution {dataplanets[name].period_of_revolution}</p>}
      </div>
    )
  } else {
    return (<></>)
  }
}
