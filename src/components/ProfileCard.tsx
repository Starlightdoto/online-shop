import React, {FC, useState} from 'react';
import DetailsInput from "./ui-components/DetailsInput";
import {Button} from "./ui-components/Button";
import StyledText from "./ui-components/StyledText";

interface ProfileCardProps {

}

const ProfileCard = (props:any) => {

    const [isEditClicked, setIsEditClicked] = useState<boolean>(false);

    const changeEditState = () => {
        setIsEditClicked(!isEditClicked);
    }

    return (
        <div>
            {isEditClicked
                ? <form className={"profileCardEdit"}>
                    <DetailsInput labelName={"First Name"} />
                    <DetailsInput labelName={"Last Name"} />
                    <DetailsInput labelName={"Email"} />
                    <DetailsInput labelName={"Address 1"} />
                    <DetailsInput labelName={"Address 2 (optional)"} />
                    <Button onClick={changeEditState} className={"default"} buttonText={"Save"}/>
                </form>
                : <div className={"profileCard"}>
                    <StyledText>Jon</StyledText>
                    <StyledText>Jones</StyledText>
                    <StyledText>jonjones@test.com</StyledText>
                    <StyledText>Abq,Test 123</StyledText>
                    <Button onClick={changeEditState} className={"default"} buttonText={"Edit"}/>
                </div>
            }

        </div>
    );
};

export default ProfileCard;