import { useEffect, useState } from 'react';
import './App.css';
import { obtainAll, obtainCharacters } from './rick-morty/functions';




function AppRM() {

    const [url, setUrl] = useState(`https://rickandmortyapi.com/api/character/?page=1`);
    const [next, setNext] = useState(null);
    const [last, setLast] = useState(null);
    const [pages, setPages] = useState(null);
    const [total, setTotal] = useState(null);
    const [character, setCharacter] = useState(null);
    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        obtainAll(url, setNext, setLast, setPages, setTotal, setCharacter)
    }, [url]);

    const goNext = (url) => {
        setUrl(url)
    }

    const goLast = (url) => {
        setUrl(url)
    }

    return (
        <div className="App">
            <div className='container'>

            <h3>Total characters: {total != null ? (
                    total
                ) : ('') }</h3>

            <h3>Total pages: { pages != null ? (
                pages
            ) : ('')}</h3>

            { last != null ? (
                <button onClick={() => goLast(last)}>Last</button>) : ('') }

            { next != null ? (
                <button onClick={() => goNext(next)}>Next</button>) : ('') }
            
            {/* TODO: <div className='list'>
                {character != null (
                    character.map((key, index) => {
                        <div key={index}
                    })
                ) : ('')}
            </div> */}
            
            
            </div>
        </div>
            );
    }



export default AppRM;
