import React, {FC} from "react";


export const Button = (props:any) => {
    const {className, buttonText, onClick} = props;
    return (
    <button onClick={onClick} className={`${className}-button`}>
        {buttonText}
        {props.children}
    </button>
    )
};