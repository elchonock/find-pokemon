
const pokeBase = "https://pokeapi.co/api/v2/pokemon";


export const getPokeData = async () => {    
    const data = await fetch(`${pokeBase}?limit=100`);
    if (!data.ok) {
        throw new Error(`Something went wrong.. Error: ${data.status}`);
    }
    return await data.json();
}


export const getPokemonByName = async (name:string) => {
    const data = await fetch(`${pokeBase}/${name}`);
    if (!data.ok) {
        throw new Error(`Something went wrong.. Error: ${data.status}`);
    }
    const res = await data.json();
    return res;
    // return {name: res.name, height: res.height, weight: res.weight, experience: res.base_experience};
}



