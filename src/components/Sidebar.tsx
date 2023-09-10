import React, {FC} from "react";
import { Button } from "./ui-components/Button";
import { Selector } from "./ui-components/Selector";
import {SortSelector} from './ui-components/SortSelector';

interface SidebarProps {

}

export const Sidebar:FC<SidebarProps> = (props) => (
    <div className={"sideBar"}>
        <Selector />
        <SortSelector />
        <Button className={"default"}  buttonText = "Filter"/>
    </div>
);