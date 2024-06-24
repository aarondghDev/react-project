import React, { useState } from 'react';

    const btnMessage = {
        backgroundColor:'black',
        fontWeight: 'bold',
        color:'white',
        border:'none',
        borderRadius:'10px'
    }

    let red = 0;
    let green = 200;
    let blue = 180;

    // ? Estilo para usuario logueado
    const loggedStyle = {
        borderRadius: '10px',
        border: 'none',
        backgroundColor: `rgb(${red},${green},${blue})`,
        color: "white",
        fontWeight: "bold"
    };

    // ? Estilo para usuario no logueado
    const unloggedStyle = {
        borderRadius: '10px',
        border: 'none',
        backgroundColor: 'tomato',
        color: "white",
        fontWeight: "bold"
    }

// Login / Logout button
const LoginButton = ({loginAction, propStyle}) => {
    return (
    <button style={propStyle} onClick={loginAction}>Login</button>
    )
};

const LogoutButton = ({logoutAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={logoutAction}>Logout</button>
        )
}

// ? (Expresion true) && expresion => se renderiza la expresion
// ? (Expresion a false) && Expresion => no se renderiza la expresion

const Optionalrender = () => {

    const [access, setAccess] = useState(false);
    const [nMessages, setnMessages] = useState(0);

    // const updateAcces = () => {
    //     setAccess(!access);
    // }

    const loginAction = () => {
        setAccess(true);
    }

    const logoutAction = () => {
        setAccess(false);
    }

    let optionalButton;

    if(access) {
        optionalButton = <LogoutButton propStyle={ unloggedStyle } logoutAction={logoutAction}></LogoutButton>
    }else {
        optionalButton = <LoginButton propStyle={ loggedStyle } loginAction={loginAction}></LoginButton>
    }

    // Unread messages
    let addMessages = () => {
        setnMessages(nMessages + 1);
    }

    // if(access) {
    //     optionalButton = <button onClick={updateAcces}>Logout</button>
    // }else {
    //     optionalButton = <button onClick={updateAcces}>Login</button>
    // }

    return (
        <div>
        {/* Optional Button */}
            { optionalButton }
            {/* N Messages unread */}
            {/* {nMessages > 0 && nMessages === 1 && <p>You have {nMessages} new messages...</p>}
            {nMessages > 1 && <p>You have {nMessages} new messages... </p>}
            {nMessages == 0 &&  <p>No messages </p>} */}
            {/* Terney Operator */}
            {access ? (
                <div>
                { nMessages > 0  ? 
            <p>You have {nMessages} new message{nMessages > 1 ? 's' : null}</p>
            :
            <p>No message</p>}
            <button style={btnMessage} onClick={addMessages}>{nMessages=== 0 ?
            'Add your first message'
            :
            'Add new message'}
            </button>
            </div>) : null}

        </div>
    );
}

export default Optionalrender;
