import React from 'react';
import ReactDOM from 'react-dom/client';
// Añadimos Bootstrap a nuestro proyecto
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"

// Importante: los estilos propios, deben ir debajo de bootstrap para que no los pise
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRoutingOne from './AppRoutingOne';
import AppRickMorty from './AppRickMorty';
import AppRoutingFinal from './AppRoutingFinal';
import AsyncExample from './components/pure/AsyncExample';
import AppRM from './AppRickMorty';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <AppRoutingFinal />
//   </React.StrictMode>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//     {/* <AsyncExample /> */}
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    {/* <AppRM/> */}
    <AppRoutingFinal />
    {/* <AppRoutingOne></AppRoutingOne> */}
    {/* <App></App> */}
    {/* <AppRickMorty></AppRickMorty> */}
    </React.StrictMode>
); // quite el <React.StrictMode> porque para el componente Observableexample si esta envuelto en esa etiqueta, muestra por pantalla los mesajes dos veces, porque cada vez que renderiza muestra los mensajes, o algo asi

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
