import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const Notfoundpage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const goBack = () => {
        navigate (-1)
    }

    return (
        <div>
            <h1>404 - Page Not Found</h1> 
            {/* <button onClick={ goBack } >Go back</button> */} 
            <button onClick={ () => navigate('/') } >Go to home</button>
        </div>
    );
}

export default Notfoundpage;
