import React, {FC, useState} from 'react';

interface DetailsInputProps {
    labelName:string,
    type: string,
    placeholder?:string,
    profileData?: any,
    setProfileData?: any,
}

const DetailsInput:FC<DetailsInputProps> = (props) => {
    const {labelName, type, placeholder, profileData, setProfileData} = props;

    const [fieldValue, setFieldValue] = useState<string>('');

    return (
        <div>
            <label className={"detailsInputLabel"} htmlFor={"detailsInput"}>{labelName}: </label>
            <input required={type !== "address2"}  onChange={(e) => {
                setFieldValue(e.target.value);
                setProfileData((prevState:any) => {
                    switch(type) {
                        case "firstName":
                            return {...prevState, "firstName" : e.target.value};
                        case "lastName":
                            return {...prevState, "lastName" : e.target.value};
                        case "email":
                            return {...prevState, "email" : e.target.value};
                        case "address":
                            return {...prevState, "address" : e.target.value};
                    }
                });
            } } className={"detailsInput"} type="text" placeholder={placeholder} value={fieldValue}/>
        </div>
    );
};

export default DetailsInput;