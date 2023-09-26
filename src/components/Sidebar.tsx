import React, {FC, useState} from "react";
import { CategorySelector } from "./ui-components/CategorySelector";
import {SortSelector} from './ui-components/SortSelector';
import {LimitSelector} from './ui-components/LimitSelector';

interface SidebarProps {
    //@ts-ignore
    performAction?,
    //@ts-ignore
    getAll?,
}

export const Sidebar:FC<SidebarProps> = (props) => {
    const {performAction, getAll} = props;
    const [chosenCategory, setChosenCategory] = useState<string>("");

    return (
    <div className={"sideBar"}>
        <CategorySelector getAll={getAll} performAction={performAction} setChosenCategory={setChosenCategory} chosenCategory={chosenCategory}/>
        <SortSelector/>
        <LimitSelector performAction={getAll} />
    </div>
    )
};