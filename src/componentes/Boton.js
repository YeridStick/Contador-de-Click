import React from "react";
import "../hoja_de_estilos/Boton.css";

function Boton(props) {
    return (
        <div className="contenedor_boton" > 
            <button className={ props.boton_click ? "boton_click" : "boton_reiniciar"} onClick={props.manejo_click}>
                {props.texto}
            </button>
        </div>
    );
}

export default Boton;