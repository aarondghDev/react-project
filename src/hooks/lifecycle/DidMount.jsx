/**
 * Ejemplo de uso del metodo de ciclo de vida en componente clase y el hook de ciclo de vida en un componente funcional
 */

// Tipo clase

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount(){
        console.log("Comportamiento antes de que el componente sea añadido al DOM(renderice)");
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}

/// Estos dos componentes (el de arriba clase y el de abajo funcion) hacen lo mismo pero uno implementa el metodo componentDidMount() y el otro el metodo useEffect()

// Tipo funcion

export const DidMountHook = () => {

    useEffect(() => {
        console.log("Comportamiento antes de que el componente sea añadido al DOM(renderice)");
    }, []); // podemos obtener la plantilla de este useEffect poniendo useEffect y nos saldra la opcion de autocompletado.
    // Los [] indican que se ejecutara 1 sola vez, si no indicamos nada seria todas las veces. En este caso seria solo una vez, cada vez que se renderice pasara por el useEffect y dejaria la lista vacia.

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
} 

export default DidMount;