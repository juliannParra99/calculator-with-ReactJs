import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs'; // la libreria mathjs se instala con node 



function App() {

  const [input, setInput] =useState(''); //inicialmente el estado del input es una cadena vacia, por eso no vamos a ver nada en la pantalla. 

  const agregarInput = val=>{
    setInput(input + val) //set input actualiza el input y concatena un neuvo valor
  }

const calcularResultado = () =>{
  if(input){ //se puede poner solo input, por que las cadenas de cacteres vacias son de por si falsas, mientras que las que continene un valor son true.
    setInput(evaluate(input)) //evaluate se consigue con el paquete mathjs
  }else{
    alert("Por favor ingrese valores para realizar una operacion")
  }
};

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={ freeCodeCampLogo }
          className='freecodecamp-logo'
          alt='logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input = {input}  /> 
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>

        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>

        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear= {()=>setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
