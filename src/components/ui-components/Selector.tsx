import React, {FC} from "react";

interface SelectorProps {
    chosenCategory?:string,
    //@ts-ignore
    setChosenCategory?,
}

export const Selector:FC<SelectorProps> = (props) => {
    const {chosenCategory, setChosenCategory} = props;

    return (
    <div className={"selector"}>
        <label className={"catSelectorLabel"} htmlFor="catSelector">Categories </label>
        <select  id={"catSelector"}  name="catSelector" value={chosenCategory} onChange={(event) => setChosenCategory(event.target.value)} >
            <option  value="men's clothing">Men's Clothing</option>
            <option  value="jewelery">Jewelery</option>
            <option  value="women's clothing">Women's Clothing</option>
            <option  value="electronics">Electronics</option>

        </select>
    </div>
    )
};