
import { useEffect, useState } from 'react';
import { getPokeData } from '../../services/gotPokemons';
import { IAllPokemonsItem } from '../../types/pokemon.interface';
import Form from '../Form';
import PokemonCard from '../PokemonCard';
import Select from '../Select';
import s from './MainPage.module.css';

const MainPage = ():JSX.Element => {
    const [id, setId] = useState(1);

    const initialOptions = {
        name: '',
        url: '',
        id: 0
    }
    const [options, setOptions] = useState<IAllPokemonsItem[]>([initialOptions]);

    useEffect(() => {
        getPokeData()
        .then(res => setOptions(res.results.map((i: IAllPokemonsItem, ind: number) => ({ ...i, id: ind + 1 }))));

    }, []);

    return (
        <>
            <Select options={options} onChange={setId} id={id} />
            <PokemonCard setId={setId} pokemonName={options[id-1].name} id={id}></PokemonCard>
            <Form/>
        </>
    );

}

export default MainPage;