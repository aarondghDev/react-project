import  Button  from '@mui/material/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Copyright from '../../components/pure/Copyright';

const Dashboard = () => {

    // let navigateTo = (path) => {
    //     navigate ( "/hola-mundo/src/components/pure/forms/loginForm.jsx" )
    // }
    const navigate = useNavigate();

    let navigateTo = (path) => {
        sessionStorage.clear();
        navigate ( "/login" )
    }


    const logout = () => {
        navigateTo()
    }

    return (
        <div>
        <h1>Dashboard</h1>
            <Button variant="contained" onClick={logout}>Logout</Button>
            <Copyright></Copyright>
        </div>
    );
}

export default Dashboard;
