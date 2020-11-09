import React from 'react';

const Weather = ({result}) => {

    const kelvin = 273.15;
    const { name, main } = result;
    if(!name) return null;
    const date = new Date();

    const card = {
        padding: '3rem'
    }
    
    const degrees = {
        fontSize: '3rem'
    }

    return ( 
        <div className="card mt-5" style={card}>
            <div className="black-text">
                <h5 className='text-center card-title'>{name} {date.toLocaleDateString()}</h5>
                <p className='text-center ' style={degrees}>
                    { parseFloat( main.temp - kelvin, 10 ).toFixed(2) }  <span> &#x2103; </span>
                </p>
                <p className='text-center'>Max : 
                    { parseFloat( main.temp_max - kelvin, 10 ).toFixed(2) }  <span> &#x2103; </span> /
                    Min :
                    { parseFloat( main.temp_min - kelvin, 10 ).toFixed(2) }  <span> &#x2103; </span>
                </p>
            </div>
        </div>
     );
}

export default Weather;