import React, {FC, useState} from 'react';
import DetailsInput from "./ui-components/DetailsInput";
import {Button} from "./ui-components/Button";
import StyledText from "./ui-components/StyledText";
import AvatarImage from "./ui-components/AvatarImage";

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
    const [file, setFile] = useState();
    const [isEditClicked, setIsEditClicked] = useState<boolean>(false);

    const uploadAvatar = (event:any) => {
        console.log(event.target.files);
        //@ts-ignore
        setFile(URL.createObjectURL(event.target.files[0]));
    }

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
                    <input className={"avatarLoader"} type="file" onChange={uploadAvatar}/>
                    <AvatarImage image={file} />
                    <DetailsInput type={"fName"} labelName={"First Name"} placeholder={"John"} />
                    <DetailsInput type={"lName"} labelName={"Last Name"} placeholder={"Doe"} />
                    <DetailsInput type={"email"} labelName={"Email"} placeholder={"example@email.com"} />
                    <DetailsInput type={"address"} labelName={"Address 1"} placeholder={"Ada-Lovelace, 21"} />
                    <DetailsInput type={"address2"} labelName={"Address 2 (optional)"} />
                    <Button type={"submit"} onClick={changeEditState} className={"default"} buttonText={"Save"}/>
                </form>
                : <div className={"profileCard"}>
                    <AvatarImage image={file} />
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