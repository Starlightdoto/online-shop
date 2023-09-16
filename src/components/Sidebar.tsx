import React, {FC, useState} from "react";
import { Button } from "./ui-components/Button";
import { Selector } from "./ui-components/Selector";
import {SortSelector} from './ui-components/SortSelector';

interface SidebarProps {
    //@ts-ignore
    performAction?
}

export const Sidebar:FC<SidebarProps> = ({performAction}) => {
    const [chosenCategory, setChosenCategory] = useState<string>("men's clothing");

    console.log(chosenCategory);

    return (
    <div className={"sideBar"}>
        <Selector setChosenCategory={setChosenCategory} chosenCategory={chosenCategory}/>
        <SortSelector/>
        <Button onClick={() => performAction(chosenCategory)} className={"default"} buttonText="Filter"/>
    </div>
    )
};