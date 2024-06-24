import React, { useState } from 'react';

    // Definiendo estilos en constantes:

    // ? Estilo para usuario logueado
    const loggedStyle = {
        color: "white"
    };

    // ? Estilo para usuario no logueado
    const unloggedStyle = {
        color: "tomato",
        fontWeight: "bold"
    }

const GreetingStyled = (props) => {

    // Generamos un estado para el componente y asi controlar si el usuario esta o no logueado
    const [logged, setLogged] = useState(false);



    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            { logged ? (<p>Hola, {props.name}</p>) : (<p>Please login</p>)}

            <button onClick={() => {
                console.log("Boton pulsado");
                setLogged(!logged);
            }}>
                { logged ? "Logout" : "Login"} 
            </button>
        </div>
    ); {/* Esto basicamente lo que hace es tener un estaod inicial false y al hacer click cambiara el estado de logged por lo que cambiara el color del texto y lo que dice en el boton*/}
}

export default GreetingStyled;
