import React, {FC} from "react";
import {useTranslation} from 'react-i18next';

interface CategorySelectorProps {
    chosenCategory?:string,
    setChosenCategory?: any,
    filterCategoriesFunction?: any,
    getAll?: any,
}

export const CategorySelector:FC<CategorySelectorProps> = (props) => {
    const {t, i18n} = useTranslation();
    const {getAll, filterCategoriesFunction, chosenCategory, setChosenCategory} = props;

    return (
    <div className={"selector"}>
        <label className={"catSelectorLabel"} htmlFor="catSelector">{t('Categories')} </label>
        <select className={"customSelect"}  id={"catSelector"}  name="catSelector" value={chosenCategory}
                 onChange={(event) => {
                    setChosenCategory(event.target.value);
                    if(event.target.value === "all") {
                        getAll();
                 } else {
                        filterCategoriesFunction(event.target.value);
                    }
                 }}>
            <option value="all">{t('All')}</option>
            <option  value="men's clothing">Men's Clothing</option>
            <option  value="jewelery">Jewelery</option>
            <option  value="women's clothing">Women's Clothing</option>
            <option  value="electronics">Electronics</option>
        </select>
    </div>
    )
};