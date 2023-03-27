import {Dispatch, SetStateAction, ChangeEvent} from 'react';

type Props = {
    value: string;
    setValue: Dispatch<SetStateAction<string>>
}

export const SearchBar = ({value, setValue}: Props) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    return (
        <div>
            <input type="text" value={value} placeholder="Search a city ..." onChange={handleChange}/>
        </div>
    )
}
