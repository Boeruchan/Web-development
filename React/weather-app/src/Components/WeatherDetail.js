import React,  { useState, useEffect } from 'react';

function WeatherDetail({lat, ion}) {
    const [details, setDetails] = useState('');
    const  [date, setDate] = useState([]);

    useEffect(() => {       
        const getDataFromServer = async()=>{
            // let req = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${ion}&exclude=hourly&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            let req = await fetch('/weather.json')
             let data = await req.json();
            setDetails(data);
            setDate(data.daily);    
            console.log(data);    
          } 
        getDataFromServer()
    }, [lat, ion]);

const realDate = date.map((datum) =>
new Date(datum.dt * 1000).toLocaleDateString()
);

const tablestyle = {
    border: "1px solid black",
    itemAlign: 'center',
    margin: 'auto'
}

const cardsecond = {
    backgroundColor: 'lightblue',
    height: '120px',
    width: '500px',
    border: '2px solid black',
    padding: '10px',
    textAlign: 'center',
    margin: '20px'
}

if (details === ""){
    return <p>loading</p>
} else {
        return(
            <div> <h1>{details.timezone} details</h1>
                    <div style={cardsecond}>     
                <h3> {realDate[0]} <img src={`http://openweathermap.org/img/wn/${details.daily[0].weather[0].icon}@2x.png`} alt='' width='50px'/>
             {details.daily[0].temp.min}/{details.daily[0].temp.max}C
             </h3>  
                 <table style={tablestyle}>
                        <tr>
                            <th></th>
                        <th>morning</th>
                        <th>afternoon</th>
                        <th>evening</th>
                        <th>night</th>
                        </tr>
                        <tr>
                        <th>Temperature</th>
                        <td>{details.daily[0].temp.day}</td>
                        <td>{details.daily[0].temp.morn}</td>
                        <td>{details.daily[0].temp.eve}</td>
                        <td>{details.daily[0].temp.night}</td>
                        </tr>
                </table>
               </div> 
             </div>
        )
        } 
}

    export default WeatherDetail;