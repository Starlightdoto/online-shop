import React, {FC, useState} from 'react';

interface DetailsInputProps {
    labelName:string,
}

const DetailsInput:FC<DetailsInputProps> = ({labelName}) => {

    const [fieldValue, setFieldValue] = useState<string>('');

    return (
        <div>
            <label className={"detailsInputLabel"} htmlFor={"detailsInput"}>{labelName}: </label>
            <input onChange={(e) => setFieldValue(e.target.value) } className={"detailsInput"} type="text" placeholder="Search..." value={fieldValue}/>
        </div>
    );
};

export default DetailsInput;