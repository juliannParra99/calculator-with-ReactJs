import React from "react";
import '../hojas-de-estilo/Boton.css'

function Boton(props){ /*props.children para que se muestre el contenido en medio de ambas etiquetas */

  const esOperador = (valor)=>{
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  return( //onClick={props.manejarClick(props.children)}> para que cuando se haga click en un boton queremos que s emeustre en la pantalla el valro de ese boton 
    <div
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={()=>props.manejarClick(props.children)}>
      {props.children} 
    </div>
  )

}

export default Boton;