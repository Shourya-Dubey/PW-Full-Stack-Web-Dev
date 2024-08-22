import { useEffect, useState} from "react";
import  axios  from "axios";
import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon";

function PokemonList(){

    const[pokemonList, setPokemonList] = useState([])
    const[isLoading, setIsLoading] = useState(true)

    const[pokedexUrl, setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon')

    const[nexUrl, setNextUrl] = useState('');
    const[prevUrl, setPrevUrl] = useState('');

    async function downloadPokemon() {
        setIsLoading(true)

        const respone = await axios.get(pokedexUrl);
        const pokemonResults = respone.data.results
        console.log(respone.data)

        setNextUrl(respone.data.next)
        setPrevUrl(respone.data.previous)
        const pokemonResultPromise = pokemonResults.map((pokemon)=> axios.get(pokemon.url))
        const pokemonData = await axios.all(pokemonResultPromise);

        console.log(pokemonData);

        const res = pokemonData.map((pokeData) => {
          const pokemon = pokeData.data;
          return {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.other
              ? pokemon.sprites.other.dream_world.front_default
              : pokemon.sprites.front_shiny,
            types: pokemon.types,
          };
        });
        console.log(res)
        setPokemonList(res)
        setIsLoading(false)
    }

    useEffect(() => {
      downloadPokemon();
    }, [pokedexUrl]);

    return (
      <div className="pokemon-list-wrapper">
        <div className="pokemon-wrapper">
          {isLoading
            ? "Loading..."
            : pokemonList.map((p) => (
                <Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>
              ))}
        </div>
        <div className="controls">
          <button disabled={prevUrl == null} onClick={()=>setPokedexUrl(prevUrl)}>Previous</button>
          <button disabled={nexUrl == null} onClick={()=> setPokedexUrl(nexUrl)}>Next</button>
        </div>
      </div>
    );

}

export default PokemonList;