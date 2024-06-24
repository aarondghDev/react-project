import React from 'react';

import { useLocation, useNavigate } from "react-router-dom";


const Aboutpage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    console.log('We are in Route:', location.pathname); // nos da la ruta /about o /faqs


    const goBack = () => {
        navigate(-1);
    }

    const goForward = () => {
        navigate(1)
    }

    return (
        <div>
            <h1>
                About | FAQs Page
            </h1>
            <div>
                <button onClick={ () => navigate('/') }>
                    Go to Home
                </button>
                <button onClick={ goForward }>
                    Go Forward
                </button>
                <button onClick={ goBack }>
                    Go back
                </button>
            </div>
        </div>
    );
}

export default Aboutpage;
