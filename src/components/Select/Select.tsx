import {  ChangeEvent  } from 'react';
// import { getPokeData } from '../../services/gotPokemons';
import { IAllPokemonsItem } from '../../types/pokemon.interface';
import s from './Select.module.scss';
import Select from 'react-select';


const SelectPokemon = ({ onChange, id, options }: any):JSX.Element => {    
    // const initialOptions = {
    //     name: '',
    //     url: '',
    //     id: 0
    // }
    // const [options, setOptions] = useState<IAllPokemonsItem[]>([initialOptions]);

    const newOptions = options.map((op: IAllPokemonsItem)=>(({value: op.name, label: op.name})));
    

    // const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
        // const item = options.filter((i: IAllPokemonsItem) => e.target.value === i.name);
        // const id = item[0].id;
        // onChange(id); 
    //}

    const onChangeHandler = (e:any) => {
        const item = options.filter((i: IAllPokemonsItem) => e.value === i.name);
        const id = item[0].id;
        // console.log(e.value);
        // console.log(id);
        onChange(id);    
    }    

    return (
        // selected = { i=== +id ? true : false}
        // defaultValue = { options[id - 1].name }

        <div className={s.select} >
            <Select                 
                options={newOptions} 
                onChange={onChangeHandler}
                />

        {/* <select className={s.select}  onChange={onChangeHandler} name="poke" id="poke" value={options[id - 1].name}>
            {            
                options.map((p:IAllPokemonsItem)=>{
                    return (
                        <option className={s.option}  key={p.id} value={p.name}>{p.name}</option>
                    )

            })
            }

        </select> */}

        </div>

    );

}

export default SelectPokemon;