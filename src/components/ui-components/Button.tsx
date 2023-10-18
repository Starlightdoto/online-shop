import React, {FC} from "react";
//не сделано через интерфейс - т.к. нужно юзать чилдрен здесь

export const Button = (props:any) => {
    const {className, buttonText, onClick, type, disabled} = props;
    return (
    <button disabled={disabled ? true : false} type={type} onClick={onClick} className={`${className}-button`}>
        {buttonText}
        {props.children}
    </button>
    )
};