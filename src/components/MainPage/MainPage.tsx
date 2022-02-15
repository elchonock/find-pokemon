
import { useEffect, useState } from 'react';
import { getPokeData } from '../../services/gotPokemons';
import { IAllPokemonsItem } from '../../types/pokemon.interface';
import Form from '../Form';
import PokemonCard from '../PokemonCard';
import Search from '../Search'; 
import SelectPokemon from '../Select';
import s from './MainPage.module.css';

import { PrimaryButton, SecondaryButton, Button, FileUploader } from '@panenco/ui';

const MainPage = ():JSX.Element => {
    const [id, setId] = useState(1);
    

    const initialOptions = {
        name: '',
        url: '',
        id: 0
    }

    const [liked, setLiked] = useState<Array<number>>([]);
    const [options, setOptions] = useState<IAllPokemonsItem[]>([initialOptions]);

    useEffect(() => {
        getPokeData()
        .then(res => setOptions(res.results.map((i: IAllPokemonsItem, ind: number) => ({ ...i, id: ind + 1 }))));

    }, []);

    return (
        <>
            <SelectPokemon options={options} onChange={setId} id={id} />
            <PokemonCard liked={liked} setLiked={setLiked} setId={setId} pokemonName={options[id-1].name} id={id}></PokemonCard>
            <Form/>
            <Search/>
            <>
                <PrimaryButton>Click PrimaryButton!</PrimaryButton> <br />
                <SecondaryButton>Click secondary button!</SecondaryButton> <br />
                <div className={s.uploader}>
                   <FileUploader title="Upload a photo" /><br /> 
                </div>
                

            </>

        </>
    );

}

export default MainPage;