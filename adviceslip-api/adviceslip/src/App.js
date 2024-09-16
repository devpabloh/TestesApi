import logo from './logo.svg';
import './App.css';
import axios from "axios"
import {useState, useEffect} from "react"

function App() {
 const [Info, setInfo] = useState(null)
 const urlApi = '	https://api.adviceslip.com/advice'

 useEffect(()=>{axios.get(urlApi)
  .then (res => {
    setInfo(res.data.slip)
  }) .catch(error => {console.error(error)})
 },[])

  return (
    <div className="App">
      <p>{slip.id}</p>
    </div>
  );
}

export default App;
