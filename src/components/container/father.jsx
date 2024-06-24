import React, { useState } from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState("Martin");

    function showMessage (text){
        alert(`Message received: ${text}`)
    }

    function updateName(newName) {
        setName(newName)
    }

       
    return (
            <div style={{background: "tomato", padding: "10px"}}>
            <Child name={name} send={showMessage} update={updateName}></Child> 
            {/* Esto se esta ejecutando aqui en el father pero lo se esta generando en el hijo */}
        </div>
    );
}

export default Father;
