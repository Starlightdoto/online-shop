import React, {FC, useState} from 'react';

interface SearchInputProps {
    searchValue: string,
    //@ts-ignore
    setSearchValue,
}

const SearchInput:FC<SearchInputProps> = (props) => {
    const {searchValue, setSearchValue} = props;

    return (
        <input onChange={(e) => {
            setSearchValue(e.target.value);
        } } className={"searchInput"} type="text" placeholder="Search QuickShop" value={searchValue}/>
    );
};

export default SearchInput;