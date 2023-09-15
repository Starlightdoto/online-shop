import React, {FC} from "react";

interface SelectorProps {

}

export const Selector:FC<SelectorProps> = (props) => {
    return (
    <div className={"selector"}>
        <label htmlFor="catSelector">Categories </label>
        <select name="catSelector" id="">
            <option value="men-clothing">Men's Clothing</option>
            <option value="women-clothing">Women's Clothing</option>
            <option value="electronics">Electronics</option>

        </select>
    </div>
    )
};