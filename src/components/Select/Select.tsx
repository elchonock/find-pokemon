import {  ChangeEvent  } from 'react';
// import { getPokeData } from '../../services/gotPokemons';
import { IAllPokemonsItem } from '../../types/pokemon.interface';
import s from './Select.module.scss';


const Select = ({ onChange, id, options }: any):JSX.Element => {
    
    // const initialOptions = {
    //     name: '',
    //     url: '',
    //     id: 0
    // }
    // const [options, setOptions] = useState<IAllPokemonsItem[]>([initialOptions]);
    // // console.log(poks);

    // useEffect(() => {
    //     getPokeData().then(res => setOptions(res.results.map((i: IAllPokemonsItem, ind:number)=>({...i, id: ind+1 }))));

    // }, []);
    // // console.log(options);
    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => {

        const item = options.filter((i: IAllPokemonsItem) => e.target.value === i.name);
        const id = item[0].id;
        // const newId = new RegExp(id);
        // console.log(newId);
        console.log(id);


        onChange(id);    
    }

    

    return (
        // selected = { i=== +id ? true : false}
        // defaultValue = { options[id - 1].name }

        <select className={s.select}  onChange={onChangeHandler} name="poke" id="poke" value={options[id - 1].name}>
            {            
                options.map((p:IAllPokemonsItem)=>{
                    return (
                        <option className={s.option}  key={p.id} value={p.name}>{p.name}</option>
                    )

            })
            }

        </select>

    );

}

export default Select;