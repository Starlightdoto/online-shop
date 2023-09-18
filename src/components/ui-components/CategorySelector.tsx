import React, {FC} from "react";

interface CategorySelectorProps {
    chosenCategory?:string,
    //@ts-ignore
    setChosenCategory?,
    //@ts-ignore
    performAction?,
    //@ts-ignore
    getAll?,
}

export const CategorySelector:FC<CategorySelectorProps> = (props) => {
    const {getAll, performAction, chosenCategory, setChosenCategory} = props;

    return (
    <div className={"selector"}>
        <label className={"catSelectorLabel"} htmlFor="catSelector">Categories </label>
        <select  id={"catSelector"}  name="catSelector" value={chosenCategory}
                 onChange={(event) => {
                    setChosenCategory(event.target.value);
                    if(event.target.value === "all") {
                        getAll();
                 } else {
                        performAction(event.target.value);
                    }
                 }}>
            <option value="all">All</option>
            <option  value="men's clothing">Men's Clothing</option>
            <option  value="jewelery">Jewelery</option>
            <option  value="women's clothing">Women's Clothing</option>
            <option  value="electronics">Electronics</option>
        </select>
    </div>
    )
};