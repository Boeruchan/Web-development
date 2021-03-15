import React,  { useState, useEffect } from 'react';
// import Accordion from 'react-bootstrap/Accordion'

function WeatherDetail({lat, ion}) {
    const [details, setDetails] = useState([]);
 
    useEffect(() => {
        const getDataFromServer = async()=>{
            let req = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${ion}&exclude=hourly&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
             let data = await req.json();
             console.log(data);
            setDetails(data);        
          }
        getDataFromServer()
    }, []);
// console.log(details)

// const weather = details.daily[0].temp;

// console.log(weather)

const d = new Date(details.daily[1].dt*1000);
let DateTime = d.toLocaleDateString();
console.log(d);

console.log(DateTime);

        return(
        
            <div>
                <h1>Amsterdam details</h1>
              
             <h3>{DateTime}
             <img src={`http://openweathermap.org/img/wn/${details.daily[0].weather[0].icon}@2x.png`} alt='' width='50px'/>
             {details.daily[0].temp.min}/{details.daily[0].temp.max}C
             </h3>  
                 <table>
                    <td>
                        <tr></tr>
                        <tr>Temperature</tr>
                        </td>
                        <td>
                        <tr>morning</tr>
                        <tr>{details.daily[0].temp.morn}</tr>
                        </td>
                        <td>
                        <tr>afternoon</tr>
                        <tr>{details.daily[0].temp.day}</tr>
                    </td>
                    <td>
                        <tr>evening</tr>
                        <tr>{details.daily[0].temp.eve}</tr>
                        </td>
                        <td>
                        <tr>night</tr>
                        <tr>{details.daily[0].temp.night}</tr>
                    </td>
                </table>
              
            </div> 

            
        )
        
    
}

    export default WeatherDetail;