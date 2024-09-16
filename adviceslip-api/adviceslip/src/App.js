import logo from './logo.svg';
import './App.css';
import axios from "axios"
import {useState, useEffect} from "react"

function App() {
 const [info, setInfo] = useState(null)
 const apiUrl = 'https://api.adviceslip.com/advice'

  useEffect(()=>{
    axios.get(apiUrl)
    .then(res => {
    setInfo(res.data.slip)
  }) .catch(error => {console.error(error)})
 },[apiUrl])

  return (
    <div className="App">
      {info ? (
      <div>
        <p>Id: {info.id}</p>
        <p>A frase do dia é: {info.advice}</p>  
      </div>
      ) : (<p>estudar</p>)}
    </div>
  );
}

export default App;
