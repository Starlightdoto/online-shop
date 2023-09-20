import React, {FC, useState} from 'react';
import {useTranslation} from 'react-i18next';

interface SearchInputProps {
    searchValue: string,
    setSearchValue: React.Dispatch<React.SetStateAction<string>>,
}

const SearchInput:FC<SearchInputProps> = (props) => {
    const {t, i18n} = useTranslation();
    const {searchValue, setSearchValue} = props;

    return (
        <input onChange={(e) => {
            setSearchValue(e.target.value);
        } } className={"searchInput"} type="text" placeholder={t("Search QuickShop")} value={searchValue}/>
    );
};

export default SearchInput;