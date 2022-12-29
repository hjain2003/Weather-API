import React from 'react'

const Card = ({tempinfo}) => {

    const{temp,humidity, pressure,weathermood,name,speed,country,sunset}=tempinfo;
  return (
    <>
    <div id="details">
        <div id="temp">{temp}&deg;</div>
        <div id="weplace">
            <span id="windy">{weathermood}</span>
            <span id="place">{country}</span>
        </div>
        <div id="datetime">
            <span id="date">{new Date().toLocaleString()}</span> 
        </div>
        </div>

        <div id="otherdetails">
            <div id="placetime">
                <span id="ti">{sunset}</span>
                <span id="sunset">Sunset</span>
            </div>
            <div id="humidity">
                <span id="ti">{humidity}</span>
                <span id="humid">Humidity</span>
            </div>
            <div id="pressure">
                <span id="pi">{pressure}</span>
                <span id="press">Pressure</span>
            </div>
            <div id="wind">
                <span id="ti">{speed}</span>
                <span id="sunset">Wind</span>
            </div>
        </div> 
    </>
  )
}

export default Card
