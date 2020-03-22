import React,{useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;


const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0F574E 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFF;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {

  //STATE DE FRASES
  const [frase, guardar_frase] = useState({});

  // const consultar_API = () => {
  //   const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
  //   const frase = api.then(respuesta => respuesta.json());
  //   frase.then(resultado => console.log(resultado));
  // }

  const consultar_API = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    guardar_frase(frase[0]);
  }

  //CARGAR UNA FRASE
  useEffect(() => {
    consultar_API();
  },[]);

  return (
    <Contenedor>
    <Frase 
      frase={frase}
    />
    <Boton
      onClick={consultar_API}
      // onClick = {() => consultar_API()}
    >
      Obtener Frase
    </Boton>
    
    </Contenedor>
  );
}

export default App;
