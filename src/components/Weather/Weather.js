import React, { Component, useState } from "react";
import "./Weather.css";
import dotenv from 'dotenv'
require("dotenv").config();

function WeatherContainer() {

    const myKey = process.env.REACT_APP_WEATHER_API;
    console.log(myKey)
    const lat = 34;
      const lon = -76;
    //     `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`


  const [weatherData, setWeatherData] = useState({
    temp: null,
    humidity: null,
    desc: null,
    city: null,
  });

  function getWeatherData () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}`)
    .then(response => response.json())
    .then(data => console.log(data))
  }
  getWeatherData();

  return (
    <section className="weatherBox">
      <h5>Current Weather on the Farm</h5>
      <p className="temp">15 degrees</p>
      <p className="weatherDescription">Cloudy</p>
      <section className="weatherInfo">
        {weatherData.temp === null ? (
        <p>Getting Current Weather <i className="material-icons">wb_sunny</i></p>) : ""}
      </section>
    </section>
  );
}

export default WeatherContainer;

// class weather extends Component  {

//     render (data) {
//         console.log('weather is rendering')
//         return (
//             <div className='weatherBox'>
//                <p className="temp">15 degrees</p>
//                <p className="weatherDescription">Cloudy</p>
//             </div>
//         )
//     }

// }

// export default weather;
