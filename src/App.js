import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MainColumn from './components/mainColumn';
import DisplayBoard from './components/DisplayBoard';
import { FiSearch } from 'react-icons/fi';
function App() {
  const [city, setCity] = useState("Oxford")
  const [zip, setZip] = useState("38655")
  const [temp, setTemp] = useState()
  const [weather, setWeather] = useState()
  const [weatherDetails, setWeatherDetails] = useState()
  async function callWeatherAPI(location) {
    let res;
      await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=49f83cd3b65feac05c15461df3b98079&units=imperial")
      .then((res) => res.json())
      .then((result) => {
        res = result;
      })
    return res;
  }
  function setWeatherData(weatherRes) {
    if (weatherRes) {
      setTemp(weatherRes.main.temp)
      setWeather(weatherRes.weather[0].main)
      setWeatherDetails([weatherRes.main.feels_like, weatherRes.main.humidity, weatherRes.main.pressure])
      setCity(weatherRes.name)
    }
  }
  async function callGeolocationAPI() {
    let res;
    await fetch("https://api.ipgeolocation.io/ipgeo?apiKey=b073c4c1e6e3415c9f160f19cd3d43d2")
      .then((res) => res.json())
      .then((result) => {
          res=result;
      })
    return res;
  }
  function search(location) {
    callWeatherAPI(location).then((weatherRes)=>{
      setWeatherData(weatherRes)
    })
  }
  useEffect(() => {
    callWeatherAPI(zip).then((weatherRes)=>{
      setWeatherData(weatherRes)
    })
    callGeolocationAPI().then((location)=>{
      setCity(location.city)
      setZip(location.zip)
    })
  }, [])
  return (
    <div className="App">
      <DisplayBoard city={city} temp={temp} weather={weather}></DisplayBoard>
      <MainColumn search={search} weatherDetails={weatherDetails}></MainColumn>
    </div>
  );
}

export default App;
