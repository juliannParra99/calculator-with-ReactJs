import React from 'react';
import '../hojas-de-estilo/Pantalla.css'

const Pantalla = ({ input }) => ( //sintaxis de desestrucuracion
  <div className='input'>
    {input}
  </div>
);

export default Pantalla