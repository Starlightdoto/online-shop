import React, {FC, useState} from 'react';

interface DetailsInputProps {
    labelName:string,
    type: string,
    placeholder?:string,
    changeFieldValue?: any,
}

const ProfileDetailsInput:FC<DetailsInputProps> = (props) => {
    const {labelName, placeholder, changeFieldValue} = props;

    const [fieldValue, setFieldValue] = useState<string>('');

    return (
        <div>
            <label className={"detailsInputLabel"} htmlFor={"detailsInput"}>{labelName}: </label>
            <input onChange={(e) => {
                setFieldValue(e.target.value);
                changeFieldValue(e.target.value);
            } } className={"detailsInput"} type="text" placeholder={placeholder} value={fieldValue}/>
        </div>
    );
};

export default ProfileDetailsInput;