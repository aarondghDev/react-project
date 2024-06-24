import React from 'react';

const AsyncExample = () => {

    async function generateNumber(key, value) {
        return 1;
    }

    async function generatePromiseNumber(key, value) {
        return Promise.resolve(2)
    }

    function obtainPromiseNumber() {
        generatePromiseNumber().then((response) => alert(`Response: ${response}`))
    }

    function obtainNumber() { // estas es lo mismo que la de obtainPromiseNumber, solo que en vez de implementar el "promise" implementa el .then que es el que cuando la otra funcion obtenga el valor lo rescate y haga lo que tenga que hacer
        generateNumber()
        .then((response) => alert(`Response: ${response}`))
        .catch((error) => alert(`Something went wrong: ${error}`))
    }

    async function saveSessionStorage(key, value) {
        sessionStorage.setItem(key, value);
        return Promise.resolve(sessionStorage.getItem(key))
    }

    function showStorage() {
        saveSessionStorage('name', 'Martin') 
        .then((response) => { // El response seria lo que resuelve (resolve) en la funcion async (pudiera ser otro nombre el de "response")
            let value = response;
            alert(`Saved Name: ${value}`)
        }).catch((error) => {
            alert(`Something went wrong: ${error}`)
        }).finally(() => {
            console.log('SUCCES: Name saved and retreived');
        })
    }

    async function obtainMessage(){
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello world'), 2000)
        });

        let message = await promise;

        await alert(`Message recieved: ${message}`)
    } 

    const returnError = async() => {
        await Promise.reject(new Error('uuups!'))
    }

    const consumeError = () => {
        returnError()
        .then((response) => alert(`Everything is OK: ${response}`))
        .catch((error) => alert(`Something went wrong: ${error}`))
        .finally(() => alert(`Finally executed`))
    }

    const urlNotFound = async () => {
        try{
            let response = await fetch('https://invalidURL.com')  // fetch: devuelve un valor futuro de una peticion a unos recursos o end point concreto, tambien sirve para hacer peticiones http
            alert(`Response: ${JSON.stringify(response)}`)
        }catch (error){
            alert(`Something went wrong with your URL: ${error} (check your console)`)
        }
    }

    const multiplePromise = async () => {
        let result = await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2'),
            ]
        ).catch((error) => alert(`Something went wrong with your URLs: ${error} (check your console)`))
    }

    return (
        <div>
        <h1>Async, Promise Examples</h1>
            <button onClick={obtainNumber} >Obtain Number</button>
            <button onClick={obtainPromiseNumber} >Obtain Promise Number</button>
            <button onClick={showStorage} >Save Name and Reason</button>
            <button onClick={obtainMessage} >Recieve message in 2 seconds</button>
            <button onClick={consumeError} >Obtain error</button>
            <button onClick={urlNotFound} >Request to Unknown URL</button>
            <button onClick={multiplePromise} >Multiple promises</button>
        </div>
    );
}

export default AsyncExample;
