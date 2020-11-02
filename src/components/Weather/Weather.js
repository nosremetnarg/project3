import React, { Component} from 'react';

class weather extends Component  {
    async getCurrent() {
    const apiKey = 'b85047ff65336fa006bc7a89fd300ed3';
    const lat = 34.789556;
    const lon = -76.601258;

    const response = await fetch(
`        api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    const data = await response.json();
    console.log(data);
    return data;
    }
    render (data) {
        return (
            <div>
                <h5></h5>
            </div>
        )
    }
    
}

export default weather;