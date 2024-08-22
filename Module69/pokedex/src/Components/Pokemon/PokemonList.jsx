import { useEffect} from "react";
import  axios  from "axios";

function Pokemon(){

    async function downloadPokemon() {
        const respone = await axios.get('https://pokeapi.co/api/v2/pokemon');
    }

    useEffect(()=>{
       downloadPokemon()
    })
    return (
        <>

        </>
    )

}

export default Pokemon;