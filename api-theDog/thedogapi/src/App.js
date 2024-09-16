
import './App.css';

import {useState, useEffect} from "react"

import axios from "axios"

function App() {
  const [dogData, setDogData] = useState(null);
  const [error, setError] = useState(null)

  const fetchDog =()=>{
    const headers = { //definindo o cabeçalho da requisição
      "content-type": "application/json",
      "x-api-key": "live_Z5LoaTYxgl1QoxzlKZmuEZMyH00FOyYMFExQD81HCSoDW8uGfCm7vtzXsAr6DZYK" //colocar a chave da API 
    };

    axios.get("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1",{headers})
    .then(response => {setDogData(response.data[0])
    }) //armazenando a url da imagem no estado
      .catch(error => {
        setError(error.message)
      console.error('Erro na busca da imagem do cachorro', error)
    })
  }

    
    useEffect(()=>{
      fetchDog();
    }, [])


  return (
    <div className="App">
      <h1>Informações do doguinho aleatório</h1>
      {dogData ? (
        <>
          <img src={dogData.url} alt='imagem de um cachorro' />
          {dogData.breeds && dogData.breeds.length > 0 && (
            <div>
              <h2>Raça: {dogData.breeds[0].name}</h2>
              <p>Temperamento: {dogData.breeds[0].temperament}</p>
              <p>Expectativa de vida: {dogData.breeds[0].life_span}</p>
              <p>Altura: {dogData.breeds[0].height.metric} cm</p>
              <p>Peso: {dogData.breeds[0].weight.metric} kg</p>
            </div>
          )}
          <button onClick={fetchDog}>Próximo doguinho</button>
        </>
      ) : (
        error ? <p>Erro: {error}</p> : <p>Carregando...</p>
      )}
    </div>
  );
}

export default App;
