import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';



const Infobox = ({info}) => {
    const initial_img="https://images.unsplash.com/photo-1609931029519-3c7fae295e64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhhemUlMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const COLD_URL="https://images.unsplash.com/photo-1472158450446-5d1e9e1f34cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNub3d8ZW58MHx8MHx8fDA%3D"
    const RAIN_URL="https://images.unsplash.com/photo-1493314894560-5c412a56c17c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhaW58ZW58MHx8MHx8fDA%3D"

  return (

  <div>
    <h2 style={{textAlign:"center"}}>Weather info:{info.weather}</h2>
<div className="infoboxcontainer">

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL:(info.temp > 15)?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity > 80 ? <ThunderstormIcon />:(info.temp > 15)?<WbSunnyIcon />:<AcUnitIcon />}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div>
            <p>Temperature={info.temp}&deg;c</p>
            <p>Temp_max={info.temmax}&deg;c</p>
            <p>Temp_min={info.temmin}&deg;c</p>
            <p>Humadity={info.humidity}</p>
            <p>The Weather can be described as <i>{info.weather}</i> and feels like {info.feels_like}&deg;c</p>
          </div>
        </Typography>
      </CardContent>
    </Card>
</div>


  </div>
  )
};

export default Infobox;
