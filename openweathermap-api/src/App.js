import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from "react"

function App() {

  const [weatherData, setweatherData] = useState(null)
  const chaveApi = 'd1bf13a6ec93d23931bbf53c7873d65f'
  const city = 'Olinda'

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${chaveApi}&units=metric`

  useEffect(() => {
    axios.get(apiUrl)
    .then(res => {
      setweatherData(res.data)
    })
      .catch (error=> {
        console.error(error)
      })
  }, ) 
  return (
    <div className="App">
      {weatherData ? (
        <div>
          <p>Cidade: {weatherData.name}</p> 
          <p>Longitude: {weatherData.lon}</p>
          <p>Latitude: {weatherData.lat}</p>
          <p>Temperatura {weatherData.main.temp}</p> 
          <p>Velocidade do vento: {weatherData.wind.speed}</p>
          <p>Descrição da água: {weatherData.weather.description}</p>
          <p>Descrição da água: {weatherData.wind.degcd}</p>
         </div>
      ): <p>Carregar dados do clima</p>}
    </div>
  );
}

export default App;
