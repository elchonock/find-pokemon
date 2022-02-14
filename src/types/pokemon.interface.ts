
export interface IPokemon {
    name: string, 
    height: number, 
    weight: number, 
    experience: number,
    id: number
}

export interface IAllPokemonsItem {
    name: string;
    url: string;
    id?: number;
}

// export interface ILiked {
//     name: string,
//     url: string,
//     id: number,
//     isLiked: boolean
// }