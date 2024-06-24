import React, { useState } from 'react';
import  { getNumbers }  from '../../services/observableService';

const Observableexample = () => {

    console.log('Subscription to Observable');
    const [number, setNumber] = useState(0);

    const obtainNewNumbers = () => {

        getNumbers.subscribe(
            {
                next(newNumber){
                    console.log('New Number:', newNumber);
                    setNumber(newNumber)
                },
                error(error){
                    alert(`Something went wrong: ${error}`)
                    console.log('Error in Observable');
                },
                complete(){
                    alert(`Finished with: ${number}`)
                    console.log('Done with the observable');
                }
            }
        )
        console.log('Finished receiving numbers');
    }

    return (
        <div>
            <h2>Number: { number }</h2>
            <button onClick={obtainNewNumbers}>
                Obtain new numbers
            </button>
        </div>
    );
}

export default Observableexample;
