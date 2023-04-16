import React from "react";
import "../hoja_de_estilos/Contador.css"

function Contador(props) {
    return(
        <div className="contenedor_contador">
            <p><b>{props.numClick}</b></p>
        </div>
    );
}

export default Contador;