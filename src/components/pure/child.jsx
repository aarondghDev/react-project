import React, { useInsertionEffect, useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressButon() {
        const text = messageRef.current.value // e¿Esto nos permite acceder a el valor de el elemtneo
        alert(`Text in input: ${text}`)
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`)
    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value)
    }

    return (
        <div style={{background: "cyan", padding: "30px"}}> {/* onMouseOver - es algo que hace al hacer over sobre el elemento que le digamos */}
            <p onMouseOver={() => console.log("On Mouse Over")}>Hello, {name}</p>
            <button onClick={() => console.log("Pressed Button 1")}>
                Button 1
            </button>
            <button onClick={pressButon}>
                Button 2
            </button>
            <button onClick={() => pressButtonParams("hello")}>
                Button 3
            </button>
            <input 
                placeholder = 'Send a text to your father'
                onFocus={() => console.log("Input Focused")}
                onChange={(e) => console.log("Input changed:", e.target.value)}
                onCopy={() => console.log("Copied text from Input")}
                ref={messageRef}
            />
            <button onClick={() => send(messageRef.current.value)}>
                Send Message
            </button>
            <div style={{marginTop: "20px"}}>
            <form onSubmit={submitName}>
                <input ref={nameRef} placeholder='New name' />
                <button type='submit'>Update name</button>
            </form>

            </div>
        </div>
    );
}

export default Child;
