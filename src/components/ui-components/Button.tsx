import React, {FC} from "react";

interface ButtonProps {
    className: string,
    buttonText: string,
}

export const Button:FC<ButtonProps> = ({className, buttonText}) => {
    return (
    <button className={`${className}-button`}>
        {buttonText}
    </button>
    )
};