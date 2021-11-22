import React from 'react';
import ReactDOM from 'react-dom';

import Datos from './Datos';
import Formulario from './Formulario';

ReactDOM.render(
  <React.StrictMode>
    <Formulario func={Datos}/>
  </React.StrictMode>,
  document.getElementById('main')
);