import axios from "axios";

const consumirApi = async (id) => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

export const conseguirPokemons = async (numPokemons) => {

    const pokemonsVector = [];
    const ids = obtenerNumerosAleatorios(numPokemons);

    for (let index = 0; index < numPokemons; index++) {

        const id = ids[index];
        const poke = await consumirApi(id);
        pokemonsVector.push(poke);
    }

    return pokemonsVector;
}

const obtenerNumerosAleatorios = (cantidad) => {

    const numsVector = [];

    for (let index = 0; index < cantidad; index++) {
        const number = Math.floor(Math.random() * (cantidad - 1) + 1);
        console.log('ALEATORIO:', number)

        numsVector.push(number)
    }

    return numsVector;
}