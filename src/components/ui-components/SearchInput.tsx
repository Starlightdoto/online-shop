import React, {FC, useState} from 'react';

interface SearchInputProps {

}

const SearchInput:FC<SearchInputProps> = (props) => {

    const [searchValue, setSearchValue] = useState<string>('');

    return (
        <input onChange={(e) => setSearchValue(e.target.value) } type="text" placeholder="Search..." value={searchValue}/>
    );
};

export default SearchInput;