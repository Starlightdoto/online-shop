import React, {FC, useState} from "react";
import {useTranslation} from 'react-i18next';

interface SortSelectorProps {
    sortFunction: any,
}

export const SortSelector:FC<SortSelectorProps> = (props) => {
    const {sortFunction} = props;
    const {t, i18n} = useTranslation();
    return (
    <div className={"selector"}>
        <label className={"sortSelectorLabel"} htmlFor="sortSelector">{t('Sort by')}  </label>
        <select onChange={(event)=> {
             sortFunction(event.target.value);
            }} className={"customSelect"} name="sortSelector" id="">
            <option value="price">{t('Price')}</option>
            <option value="title">{t('Name')}</option>
            <option value="rating">{t('Rating')}</option>
        </select>
    </div>
    )
};