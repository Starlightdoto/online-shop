import React, {FC} from "react";

interface SelectorProps {

}

export const Selector:FC<SelectorProps> = (props) => {
    return (
    <div className={"selector"}>
        <label htmlFor="catSelector">Categories:</label>
        <select name="catSelector" id="">
            <option value="books">Books</option>
            <option value="tools">Tools</option>
            <option value="smartphones">Smartphones</option>
            <option value="computers">Computers</option>
        </select>
    </div>
    )
};