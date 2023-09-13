import React, {FC} from "react";

interface ButtonProps {
    className: string,
    buttonText: string,
    //@ts-ignore
    onClick?,
}

export const Button = (props:any) => {
    const {className, buttonText, onClick} = props;
    return (
    <button onClick={onClick} className={`${className}-button`}>
        {buttonText}
        {props.children}
    </button>
    )
};