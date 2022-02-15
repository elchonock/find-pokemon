import { AutoComplete } from '@panenco/ui';
import s from './Search.module.scss';

const options = [
    { label: 'Chip', value: '1' },
    { label: 'Chip', value: '2' },
    { label: 'G1-Option 1', value: 'value_1' },
    { label: 'G1-option 2', value: 'value_2' },
    { label: 'G2-Option 1 ', value: 'value_3' },
    { label: 'G2-Option 2', value: 'value_4' },
    { label: 'G2-Option 3', value: 'value_5' },
];
const searchPlaceholder = 'Some custom disable option';

const Search = () => {
    return (
        <AutoComplete
            options={options}
            searchPlaceholder={searchPlaceholder}
            title="Select Item"
            subTitle="Hello PanencoUI"
            className={s.select}
        />
    );
}

export default Search;