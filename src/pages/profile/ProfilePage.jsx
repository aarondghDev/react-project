import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const Profilepage = ({user}) => {
    
    const location = useLocation();
    const navigate = useNavigate();
    
    const navigateTo = () => {
        navigate('/tasks');
    }

    const goBack = () => {
        navigate (-1)
    }

    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={ navigateTo }>Go to tasks</button>
            <button onClick={ goBack }>Go back</button>
        </div>
    );
}

export default Profilepage;
