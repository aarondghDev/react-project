export const obtainAll = async(url, setNext, setLast, setPages, setTotal, setCharacter) => {
    const response = await fetch(url);
    const  {info, results} = await response.json()
    setNext(info.next)
    info.prev != null ? setLast(info.prev) : setLast(null)
    setPages(info.pages)
    setTotal(info.count)
    setCharacter(results)
}

export const obtainCharacters = async(id, setCharacters) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/1`)
    // const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const results = await response.json()
    setCharacters(results)
    console.log(results);
}