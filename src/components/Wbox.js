import React, { useState,useEffect } from 'react'
import Card from './Card';

const Wbox = () => {
    const [searchvalue,setsearchvalue]=useState("Bhopal");
    const [tempinfo,settempinfo]=useState({});

    const getweatherinfo= async()=>{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=59f47b5c5a996233556e7206c7b5892a`;

            const res=await fetch(url);
            const data=await res.json();

            const {temp,humidity,pressure}=data.main;
            const {main:weathermood}=data.weather[0];
            const {name}=data;
            const {speed}=data.wind;
            const {country,sunset}=data.sys;

            const mynew={temp,humidity, pressure,weathermood,name,speed,country,sunset};
            settempinfo(mynew);

            console.log(temp);
            console.log(data);
        } catch(error){
            console.log(error);
        }
    };
    
    useEffect(()=>{getweatherinfo();},[]);
  return (
    <>
     <div id="barbox"> <input type="text" placeholder='Enter city name' value={searchvalue} onChange={(e)=>setsearchvalue(e.target.value)} id="searchbar"/><button id="search" onClick={getweatherinfo}>Search</button> </div>

     <div id="bigbox">
        <img src="https://img.icons8.com/metro/26/null/partly-cloudy-day.png" align="center"/>
        <Card tempinfo= {tempinfo}/>    
    </div>
    </>
  )
}

export default Wbox
