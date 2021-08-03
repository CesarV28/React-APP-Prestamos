import React, { useState } from 'react';

import Formulario from './components/Formulario';
import Header from './components/Header';
import Mensaje from './components/Mensaje';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';


function App() {

  // Definir el state
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState(0);
  const [total, setTotal] = useState(0);
  const [cargando, setCargando] = useState(false);

  
  const cotizacion =  cargando ? <Spinner /> :
                      !total ? <Mensaje /> :
                              <Resultado 
                                total={ total }
                                plazo={ plazo }
                                cantidad={ cantidad }
                              />

  return (
    <>
      <Header 
        titulo={ 'Cotizador de prestamos' }
      />

      <div className="container">
          <Formulario 
            cantidad={ cantidad }
            setCantidad={ setCantidad }
            plazo={ plazo }
            setPlazo={ setPlazo }
            setTotal={ setTotal }
            setCargando={ setCargando }
          />

          <div className='mensajes'>
            { cotizacion }
          </div>

      </div>

    </>
  );
}

export default App;
