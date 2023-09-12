import React, {FC, useState} from 'react';

interface SearchInputProps {
    searchText: string,
    //@ts-ignore
    setSearchText,
}

const SearchInput:FC<SearchInputProps> = ({searchText, setSearchText}) => {

    return (
        <input onChange={(e) => setSearchText(e.target.value) } type="text" placeholder="Search..." value={searchText}/>
    );
};

export default SearchInput;