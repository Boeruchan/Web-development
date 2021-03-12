import React,  { useState, useEffect } from 'react';

function WeatherFetch({city}) {
    const [posts, setPosts] = useState([]);
 
    useEffect(() => {
        const getDataFromServer = async()=>{
            let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
             let data = await req.json();
             console.log(data);
            setPosts(data);        
          }
        getDataFromServer()
 
    }, []);

    const card = {
        backgroundColor: 'lightblue',
        height: '250px',
        width: '200px',
        border: '2px solid black',
        borderRadius: '25px',
        padding: '20px',
        textAlign: 'center',
        margin: '20px'
    }

    const cardText = {
        display: 'column',
        backgroundColor: 'white',
        borderRadius:'15px',
        padding: '10px',
        fontFamily: 'Ariel'
    }

    return(
        
        <div style={card}>
            <h1>{posts.name}</h1>
           <img src={`http://openweathermap.org/img/wn/${posts.weather[0].icon}@2x.png`} alt='' />
           <b>{posts.main.temp}</b>
           <br /><br />
            <table style={cardText}>
                <tr>
                <td>min temp</td> 
                <td>max temp</td> 
                <td>humidity</td> 
                </tr>
                <tr>
                    <td>{posts.main.temp_min}</td>
                    <td>{posts.main.temp_max}</td>
                    <td>{posts.main.humidity}</td> 
                </tr>
            </table>
        </div>
    )
}

export default WeatherFetch;