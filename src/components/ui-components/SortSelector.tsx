import React, {FC} from "react";

interface SortSelectorProps {


}

export const SortSelector:FC<SortSelectorProps> = (props) => {
    return (
    <div className={"selector"}>
        <label className={"sortSelectorLabel"} htmlFor="sortSelector">Sort by  </label>
        <select name="sortSelector" id="">
            <option value="price">Price</option>
            <option value="name">Name</option>
            <option value="popularity">Popularity</option>
        </select>
    </div>
    )
};