import logo from './logo.svg';
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador' 
import { useState } from 'react';

function App() {
  
  const [numClick, setnumClick] = useState(0);

  const click = () => {
    setnumClick(numClick + 1);
  }
  const Reiniciar = () => {
    setnumClick(0);
  }

  return (
    <div className="App">
      <div className="contenedor-principal">
        <div className="contenedor-logo">
          <img className="logo-react" src={logo} alt="Logo de react" />
        </div>
        <div className="contenedor-contador">
          <Contador
          numClick={numClick}
          />
          <Boton
          boton_click={true}
          texto="Click"
          manejo_click={click}
          />
          <Boton 
          texto="Reiniciar"
          boton_click={false}
          manejo_click={Reiniciar}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
