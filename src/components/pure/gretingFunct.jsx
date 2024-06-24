import React, { useState} from 'react';
import PropTypes from 'prop-types';


const GretingFunct = (props) => { // props hace ref a las propiedades que se le van a pasar

    // Breve instroduccion a useState
    // const [variable, metodo para actualizarla] = useState(valor inicial)   -  Si pones useState ya te aparece plantilla para autocompletar
    const [age, setage] = useState(29);

    const birthday = () => {
        // Actualizamos el state
        setage(age + 1)
    }

    return (
        <div>
        <h1>
            segunda sesion { props.name } desde componente funcional
        </h1>
        <h2>
            Tu edad es de: { age }
        </h2>
        <div>
            <button onClick={birthday}>
                Cumplir años
            </button>
        </div>
    </div>
    );
};


GretingFunct.propTypes = {
    name: PropTypes.string
};

export default GretingFunct