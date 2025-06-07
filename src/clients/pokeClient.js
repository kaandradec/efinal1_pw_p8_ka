import axios from "axios";

const consumirApi = async (id) => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(resp => resp.data)

export const conseguirPokemons = async (numPokemons) => {

    const pokemonsVector = [];
    const ids = obtenerNumerosAleatorios(numPokemons);

    for (let index = 0; index < numPokemons; index++) {

        const id = ids[index];
        const data = await consumirApi(id);
        
        const pokemon = {
            id: data.id,
            name: data.name,
            image: data.sprites.other.dream_world.front_default
        }

        pokemonsVector.push(pokemon);
    }

    return pokemonsVector;
}

const obtenerNumerosAleatorios = (cantidad) => {

    const numsVector = [];

    for (let index = 0; index < cantidad; index++) {
        const number = Math.floor(Math.random() * (cantidad + 1)  +1);
        console.log('ALEATORIO:', number)

        numsVector.push(number)
    }

    return numsVector;
}