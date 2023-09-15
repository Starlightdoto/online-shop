import React, {FC} from "react";
//не сделано через интерфейс - т.к. нужно юзать чилдрен здесь

export const Button = (props:any) => {
    const {className, buttonText, onClick, type} = props;
    return (
    <button type={type} onClick={onClick} className={`${className}-button`}>
        {buttonText}
        {props.children}
    </button>
    )
};