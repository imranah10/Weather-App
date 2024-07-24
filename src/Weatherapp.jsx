import React, { useState } from 'react'
import Searchbox from './Searchbox'
import Infobox from './Infobox'
import "./infobox.css"
import "./Searchbox.css"

const Weatherapp = () => {
  const[weatherinfo,setWeatherinfo]=useState(
    {
      city:"Delhi",
        feels_like: 38.97,
        temp: 31.97,
        temp_max: 31.97,
        temp_min: 31.97,
      humidity: 74,
      weather:"Haze"
    }
  )
  

  let updateinfo=(newweaterinfo)=>{
      setWeatherinfo(newweaterinfo);
  }

  return (
    <div style={{backgroundColor:"rgb(238, 222, 222)"}}>
      <h1 style={{textAlign:"center"}}>Search for Weather</h1>
      <Searchbox updateinfo={updateinfo} />
      <Infobox info={weatherinfo}/>
    </div>
  )
}

export default Weatherapp
