import React, {FC} from "react";

interface ButtonProps {
    className: string,
    buttonText: string,
    //@ts-ignore
    onClick?,
}

export const Button:FC<ButtonProps> = ({className, buttonText, onClick}) => {
    return (
    <button onClick={onClick} className={`${className}-button`}>
        {buttonText}
    </button>
    )
};