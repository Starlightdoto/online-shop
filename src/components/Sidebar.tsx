import React, {FC, useState} from "react";
import { CategorySelector } from "./ui-components/CategorySelector";
import {SortSelector} from './ui-components/SortSelector';
import {LimitSelector} from './ui-components/LimitSelector';

interface SidebarProps {
    filterCategoriesFunction?: any,
    sortFunction?: any,
    getAll?: any,
}

export const Sidebar:FC<SidebarProps> = (props) => {
    const {filterCategoriesFunction, getAll, sortFunction} = props;
    const [chosenCategory, setChosenCategory] = useState<string>("");

    return (
    <div className={"sideBar"}>
        <CategorySelector getAll={getAll} filterCategoriesFunction={filterCategoriesFunction} setChosenCategory={setChosenCategory} chosenCategory={chosenCategory}/>
        <SortSelector sortFunction={sortFunction}/>
        <LimitSelector performAction={getAll} />
    </div>
    )
};