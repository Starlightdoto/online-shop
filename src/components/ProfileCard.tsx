import React, {FC, useState} from 'react';
import ProfileDetailsInput from "./ui-components/ProfileDetailsInput";
import {Button} from "./ui-components/Button";
import StyledText from "./ui-components/StyledText";
import AvatarImage from "./ui-components/AvatarImage";
import {useTranslation} from 'react-i18next';

interface ProfileCardProps {
    data: {
        firstName: string,
        lastName: string,
        email: string,
        address: string,
    },
    //@ts-ignore
    changeProfileData,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
}

const ProfileCard:FC<ProfileCardProps> = (props) => {
    const {t, i18n} = useTranslation();
    const {data, changeProfileData, setIsLoggedIn} = props;
    const [file, setFile] = useState();
    const [editMode, setEditMode] = useState<boolean>(false);


    const uploadAvatar = (event:any) => {
        console.log(event.target.files);
        //@ts-ignore
        setFile(URL.createObjectURL(event.target.files[0]));
    }

    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    return (
        <div>
            {editMode ? ( <form action={"/my-profile"}  className={"profileCardEdit"}>
                    <input className={"avatarLoader"} type="file" onChange={uploadAvatar}/>
                    <AvatarImage image={file} />
                    <ProfileDetailsInput changeProfileData={changeProfileData} type={"firstName"} labelName={t("First Name")} placeholder={"John"} />
                    <ProfileDetailsInput changeProfileData={changeProfileData} type={"lastName"} labelName={t("Last Name")} placeholder={"Doe"} />
                    <ProfileDetailsInput changeProfileData={changeProfileData} type={"email"} labelName={t("Email")} placeholder={"example@email.com"} />
                    <ProfileDetailsInput changeProfileData={changeProfileData} type={"address"} labelName={t("Address 1")} placeholder={"Ada-Lovelace, 21"} />
                    <Button  onClick={toggleEditMode} className={"default"} buttonText={t("Save")}/>
                </form>
            ) : ( <div className={"profileCard"}>
                    <AvatarImage image={file} />
                    <StyledText>{data.firstName}</StyledText>
                    <StyledText>{data.lastName}</StyledText>
                    <StyledText>{data.email}</StyledText>
                    <StyledText>{data.address}</StyledText>
                    <Button onClick={toggleEditMode} className={"default"} buttonText={t("Edit")}/>
                    <Button onClick={()=> setIsLoggedIn(false)} className={"default"} buttonText={t("Logout")}/>
                </div> )
            }
        </div>
    );
};

export default ProfileCard;