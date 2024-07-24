import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Searchbox = ({updateinfo}) => {
    const[city,setCity]=useState('');
    const[error,setError]=useState(false)
    const url_api="https://api.openweathermap.org/data/2.5/weather"
    const api_key="0420dd7c77e262a5c8a68f0d844260c8"

    let weatherinfo= async()=>{
      try{


        let response=await fetch(`${url_api}?q=${city}&appid=${api_key}&units=metric`);
        let jsonresponse=await response.json()
        let result={
            city:city,
            temp:jsonresponse.main.temp,
            humidity:jsonresponse.main.humidity,
            temmax:jsonresponse.main.temp_max,
            temmin:jsonresponse.main.temp_min,
            feelslike:jsonresponse.main.feels_like,
            weather:jsonresponse.weather[0].description
        }
        console.log(jsonresponse)
        console.log(result);
        return result;

      }catch(err){
        throw(err)
      }
       
    }

    let handlechange=(e)=>{
        setCity(e.target.value)
    }

    let onsubhandle=async(e)=>{
      try{
        e.preventDefault();
        console.log(city);
        setCity('');
        let info=await weatherinfo();
        updateinfo(info);
      }catch(err){
        setError(true)
      }
         
    }
  return (
    <div className='searchbox'>
      <form onSubmit={onsubhandle}>
        
      <TextField id="City" label="City-Name" variant="outlined"required value={city}onChange={handlechange}/>
      <br /><br />
      <Button variant="contained"type='submit'>
        Submit
      </Button>
      </form>
      {error && <p style={{color:"red"}}>No such place found!</p>  }

    </div>
  )
}

export default Searchbox
