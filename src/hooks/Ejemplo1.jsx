/**
 * Ejemplo de uso del Hook useState 
 * 
 * Crear un componente de tipo funcion y acceder a su estado privado a traves de un hook y, ademas, poder modificarlo*/

import React, { useState } from 'react';

const Ejemplo1 = () => {

    // Valor inicial para un contador
    const valorInicial = 0;

    // Valor inicial para una persona
    const personaInicial = {
        nombre : "Martin",
        email: "martin@gmail.com"
    }

    /**
     * Queremos que el valor inicial y persona inicial sean parte de el estado de el componente para asi gestionar su cambio y este se vea reflejado en la vista de el componente
     * 
     * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Funcion para actualizar el estado privado que contiene el contador
     */
    function incrementarContador() {
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1);
    }
    /**
     * Funcion para actualizar el estado de persona en el componente
     */

    function actualizarPersona() {
        setPersona(
            {
                nombre: "pepe",
                email:"pepe@gmail.com"
            }
        )
    }


    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h4>EMAIL: {persona.email}</h4>
            {/* Bloque de botones para actualizar el estado del componente*/}
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    );
}

export default Ejemplo1;

