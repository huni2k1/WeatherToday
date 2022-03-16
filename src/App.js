import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MainColumn from './components/mainColumn';
import DisplayBoard from './components/DisplayBoard';
import { FiSearch } from 'react-icons/fi';
function App() {
  const [city, setCity] = useState("Oxford")
  const [zip,setZip] = useState("38655")
  const [temp, setTemp] = useState()
  const [weather,setWeather] = useState()
  const [weatherDetails,setWeatherDetails] = useState()
  function search(location){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=49f83cd3b65feac05c15461df3b98079&units=imperial")
    .then((res) => res.json())
    .then((result) => {
      console.log(result)
      setTemp(result.main.temp)
      setWeather(result.weather[0].main)
      setWeatherDetails([result.main.feels_like,result.main.humidity,result.main.pressure])
      setCity(result.name)
    })
  }
  useEffect(() => {
    // fetch("https://api.ipgeolocation.io/ipgeo?apiKey=b073c4c1e6e3415c9f160f19cd3d43d2")
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result)
    //     setCity(result.city)
    //     setZip(result.zip)
    //   })
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + zip + "&appid=49f83cd3b65feac05c15461df3b98079&units=imperial")
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setTemp(result.main.temp)
        setWeather(result.weather[0].main)
        setWeatherDetails([result.main.feels_like,result.main.humidity,result.main.pressure])
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
