
import { useEffect, useState } from 'react';
import { getPokemonByName } from '../../services/gotPokemons';
import { IPokemon } from '../../types/pokemon.interface';
import Button from '../Button';
import s from './PokemonCard.module.scss';

const PokemonCard = ({ id, pokemonName, setId }: { id: number, pokemonName: string, setId:any}):JSX.Element => {
    const initialDescription = {
        name: '',
        height: 0,
        weight: 0,
        experience: 0,
        id: 0

    }
    const [pokemonDescription, setPokemonDescription] = useState<IPokemon>(initialDescription);

    useEffect(()=>{
        getPokemonByName(pokemonName)
            .then(data => {
                setPokemonDescription({ name: data.name, height: data.height, weight: data.weight, experience: data.base_experience, id: data.id })

            });

    }, [pokemonName])


    return (
        <div className={s.card}>
            <div className={s.img}>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    alt="pokemon"
                    className={s.img} />
            </div>
            <div className={s.name}>{pokemonName}</div>
            <div className={s.description}>
                <span>name: {pokemonDescription.name}</span><br />
                <span>height: {pokemonDescription.height}</span><br />
                <span>weight: {pokemonDescription.weight}</span><br />
                <span>experience: {pokemonDescription.experience}</span><br />

            </div>

            <div className={s.nav}>
                <Button id={id} setId={setId} direction={"prev"} ></Button>
                <Button id={id} setId={setId} direction={"next"} ></Button>
            </div>

        </div>

    );

}

export default PokemonCard;