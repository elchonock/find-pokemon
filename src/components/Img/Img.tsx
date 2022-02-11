
import s from './Img.module.css';

const Img = ({id}:{id:number}):JSX.Element => {
    return (
        <img 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} 
            alt="pokemon" 
            className={s.img}/>
    ); 

}

export default Img;