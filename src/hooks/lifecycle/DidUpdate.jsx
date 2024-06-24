/**
 *  Ejemplo de uso de metodo componenteDidUpdate en componente de clase y uso de hook en componente funcional
 */

import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

    componentDidUpdate() {
        console.log("Comportamiento cuando el componente recibe nuevos props o cambios en su estado privado");
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
            )
    }
}

export const DidUpdateHook = () => {

    useEffect(() => {
        console.log("Comportamiento cuando el componente recibe nuevos props o cambios en su estado privado");
    }); // fijarse que en este ejemplo no tiene [] osea que se ejecuta todas la veces, no solo una como en el ejemplo de el archivo DidMount.jsx en esta misma carpeta, comparar

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}





