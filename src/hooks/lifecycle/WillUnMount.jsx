/**
 * Ejemplo de uso del metodo componentWillUnmount para componente clase
 * Ejemplo de uso de hooks para componente funcional 
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {

    componentWillUnmount(){
        console.log("Comportamiento antes de que el componente desaparezca");
    }

  render() {
    return (
      <div>
        <h1>
            WillUnMount
        </h1>
      </div>
    )
  }
}

/// Componente funcional

const WillUnMountHook = () => { // En este caso igual en en los otros usaremos el useEffect pero en este caso no solo vamos a trabajar con lo que ejecuta si no con el return, que es aquello que se va a ejecutar cuando haya terminado el compnente

    useEffect(() => { // Para usar esta funcion(useEffect) hay que importala, ver en la parte superior de el archivo
        // Aqui no pnemos nadaa, si no que lo ponemos en el propio return
        return () => {
            console.log("Comportamiento antes de que el componente desaparezca");
        };
    }, []); // Como queremos que solo se ejecute una vez dejamos los [] vacios

    return (
        <div>
        <h1>
            WillUnMount
        </h1>
        </div>
    );
}

export default WillUnMount;


