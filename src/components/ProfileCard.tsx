import React, {FC, useState} from 'react';
import DetailsInput from "./ui-components/DetailsInput";
import {Button} from "./ui-components/Button";
import StyledText from "./ui-components/StyledText";

interface ProfileCardProps {
    data: {
        firstName: string,
        lastName: string,
        email: string,
        address: string,
    },
    //@ts-ignore
    changeData,
}

const ProfileCard:FC<ProfileCardProps> = (props) => {
    const {data, changeData} = props;

    const [isEditClicked, setIsEditClicked] = useState<boolean>(false);

    const changeEditState = () => {
        setIsEditClicked(!isEditClicked);
        if(!isEditClicked) {
            changeData({newFirstName:"test", newLastName:"test", newEmail:"test", newAddress:"test"});
        }
    }

    return (
        <div>
            {isEditClicked
                ? <form action={"/my-profile"}  className={"profileCardEdit"}>
                    <DetailsInput type={"fName"} labelName={"First Name"} />
                    <DetailsInput type={"lName"} labelName={"Last Name"} />
                    <DetailsInput type={"email"} labelName={"Email"} />
                    <DetailsInput type={"address"} labelName={"Address 1"} />
                    <DetailsInput type={"address2"} labelName={"Address 2 (optional)"} />
                    <Button type={"submit"} onClick={changeEditState} className={"default"} buttonText={"Save"}/>
                </form>
                : <div className={"profileCard"}>
                    <StyledText>{data.firstName}</StyledText>
                    <StyledText>{data.lastName}</StyledText>
                    <StyledText>{data.email}</StyledText>
                    <StyledText>{data.address}</StyledText>
                    <Button onClick={changeEditState} className={"default"} buttonText={"Edit"}/>
                </div>
            }

        </div>
    );
};

export default ProfileCard;