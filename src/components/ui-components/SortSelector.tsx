import React, {FC} from "react";
import {useTranslation} from 'react-i18next';

interface SortSelectorProps {


}

export const SortSelector:FC<SortSelectorProps> = (props) => {
    const {t, i18n} = useTranslation();
    return (
    <div className={"selector"}>
        <label className={"sortSelectorLabel"} htmlFor="sortSelector">{t('Sort by')}  </label>
        <select name="sortSelector" id="">
            <option value="price">{t('Price')}</option>
            <option value="name">{t('Name')}</option>
            <option value="popularity">{t('Rating')}</option>
        </select>
    </div>
    )
};