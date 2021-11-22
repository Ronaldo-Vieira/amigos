import React, { useEffect, useState } from 'react';
import api from "./api"
import './App.css';

function App() {

  const [dados, setDados] = useState([]);
  useEffect(() => {
    api.get("").then((response) => {
      setDados(response.data.results)
    })
  }, [])

  return (
    <div className="App">
      <h1>Pessoas cadastradas</h1>
      <div id="container">
        <div className="usuario">
          <img src={dados[0]?.picture.medium} alt="" />
          {dados[0]?.name.first}
        </div>
        <div className="usuario">
          <img src={dados[1]?.picture.medium} alt="" />
          {dados[1]?.name.first}
        </div>
        <div className="usuario">
          <img src={dados[2]?.picture.medium} alt="" />
          {dados[2]?.name.first}
        </div>
        <div className="usuario">
          <img src={dados[3]?.picture.medium} alt="" />
          {dados[3]?.name.first}
        </div>
        <div className="usuario">
          <img src={dados[4]?.picture.medium} alt="" />
          {dados[4]?.name.first}
        </div>
        <div className="usuario">
          <img src={dados[5]?.picture.medium} alt="" />
          {dados[5]?.name.first}
        </div>
        <div className="usuario">
          <img src={dados[6]?.picture.medium} alt="" />
          {dados[6]?.name.first}
        </div>
        <div className="usuario">
          <img src={dados[7]?.picture.medium} alt="" />
          {dados[7]?.name.first}
        </div>
        <div className="usuario">
          <img src={dados[8]?.picture.medium} alt="" />
          {dados[8]?.name.first}
        </div>
        <div className="usuario">
          <img src={dados[9]?.picture.medium} alt="" />
          {dados[9]?.name.first}
        </div>

      </div>
    </div>
  );
}

export default App;
