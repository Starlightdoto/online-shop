import React, {FC} from "react";

interface ButtonProps {
    className: string,
    buttonText: string,
}

export const Button:FC<ButtonProps> = ({className, buttonText}) => (
    <button className={`${className}-button`}>
        {buttonText}
    </button>
);