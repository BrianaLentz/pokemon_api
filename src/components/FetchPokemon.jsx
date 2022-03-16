import React, {useState} from 'react'


const FetchPokemon = () => {
    const [pokemons, setPokemons] = useState()


    const fetchPokemons = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=807`)
        .then(response => {
            return response.json()
        })
        .then(responseJson => {
            console.log(responseJson)
            setPokemons(responseJson.results)
        })
        .catch(err => console.log(err))
    }
    return(
        
        <>
        <button onClick={fetchPokemons}>Fetch Pokemon</button>

        {pokemons ?
        
            pokemons.map((pokemon, i)=>{
                return(
                    <ul key={pokemon.url}>
                        <li>{pokemon.name}</li>
                    </ul>
                )
            })
        
            :
            <h1> Click button to fetch Pokemon!</h1>
            }
        </>
    )
}



export default FetchPokemon