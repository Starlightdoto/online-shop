import React, {FC, useEffect, useState} from 'react';

interface DetailsInputProps {
    labelName:string,
    type: string,
    placeholder?:string,
    changeFieldValue?: any,
    initialFieldValue: any,
}

const ProfileDetailsInput:FC<DetailsInputProps> = (props) => {
    const {labelName, placeholder, changeFieldValue, initialFieldValue } = props;

    const [fieldValue, setFieldValue] = useState<string>('');

    useEffect(() => {
        setFieldValue(initialFieldValue);
    },[]);

    return (
        <div>
            <label className={"detailsInputLabel"} htmlFor={"detailsInput"}>{labelName}: </label>
            <input onChange={(e) => {
                setFieldValue(e.target.value);
                changeFieldValue(fieldValue);
            } } className={"detailsInput"} type="text" placeholder={placeholder} value={fieldValue}/>
        </div>
    );
};

export default ProfileDetailsInput;