import React, { Component } from 'react';
import './Weather.css'
require('dotenv').config();




class weather extends Component  {

  
   
    render (data) {
        console.log('weather is rendering')
        return (
            <div className='weatherBox'>
               <p className="temp">15 degrees</p>
               <p className="weatherDescription">Cloudy</p>
            </div>
        )
    }
    
}

export default weather;