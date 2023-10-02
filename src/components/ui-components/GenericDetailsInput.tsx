import React, {FC, useState} from 'react';

interface GenericDetailsInputProps {
    labelName:string,
    type: string,
    placeholder?:string,
    signUpData?: string,
    setSignUpData?: React.Dispatch<React.SetStateAction<string>>,
    onBlurFunction?: any,
}

const GenericDetailsInput:FC<GenericDetailsInputProps> = (props) => {
    const {labelName, type, placeholder, signUpData, setSignUpData, onBlurFunction} = props;

    const [fieldValue, setFieldValue] = useState<string>('');

    return (
        <div>
            <label className={"detailsInputLabel"} htmlFor={"detailsInput"}>{labelName}: </label>
            <input onBlur={onBlurFunction} onChange={(e) => {
                setFieldValue(e.target.value);
                if(setSignUpData) {
                    setSignUpData(e.target.value);
                }
            } } className={"detailsInput"} type="text" placeholder={placeholder} value={fieldValue}/>
        </div>
    );
};

export default GenericDetailsInput;