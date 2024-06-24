import React from 'react';
import { useNavigate, useLocation, history } from 'react-router-dom';

const Homepage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const navigateProps = (path) => {
        navigate(path);
    }

    console.log('We are in Route:', location.pathname); // nos da la ruta /about o /faqs

    return (
        <div>
            <h1>Home Page</h1>
            <h2>Dashboard</h2>

            <button onClick={() => navigate('/profile')}>
                Go to Profile
            </button>

            <button onClick={() => navigateProps('/online-state')}>
                Go to Page With State / Query Params
            </button>
        </div>
    );
}

export default Homepage;
