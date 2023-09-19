import React, {FC, useState} from 'react';

interface DetailsInputProps {
    labelName:string,
    type: string,
    placeholder?:string,
}

const DetailsInput:FC<DetailsInputProps> = (props) => {
    const {labelName, type, placeholder} = props;

    const [fieldValue, setFieldValue] = useState<string>('');

    return (
        <div>
            <label className={"detailsInputLabel"} htmlFor={"detailsInput"}>{labelName}: </label>
            <input required={type !== "address2"}  onChange={(e) => setFieldValue(e.target.value) } className={"detailsInput"} type="text" placeholder={placeholder} value={fieldValue}/>
        </div>
    );
};

export default DetailsInput;