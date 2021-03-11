import React,  { useState, useEffect } from 'react';
// import axios from 'axios'; 

function WeatherFetch() {
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2172797&n&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
    //     .then(res => {
    //         console.log(res)
    //         setPosts(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }, [])

    
    useEffect(() => {
        const getDataFromServer = async()=>{
            let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=2172797&n&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
             let data = await req.json();
             console.log(data);
            setPosts(data);
         
          }
        getDataFromServer()
 
    }, []);

    return (
        <div>
            {posts.name}<br />
            {posts.main.temp}
            <ul>
                {/* {posts.map(post => (
                    <li key={post.weather}>{post.weather.main}</li>)
                )} */}
            </ul>
            test
        </div>
    )
}

export default WeatherFetch;