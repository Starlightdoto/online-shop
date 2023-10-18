import React, {FC, useState} from 'react';
import ProfileDetailsInput from "./ui-components/ProfileDetailsInput";
import {Button} from "./ui-components/Button";
import StyledText from "./ui-components/StyledText";
import AvatarImage from "./ui-components/AvatarImage";
import {useTranslation} from 'react-i18next';
import { signOutUser } from "../api/authController";


interface ProfileCardProps {
    data: {
        firstName: string,
        lastName: string,
        email: string,
        address: string,
    },
    changeProfileData: any,
    userSignOut: any,
    firstName: string,
    lastName: string,
    email: string,
    address: string,
    setFirstName: any,
    setLastName: any,
    setEmail: any,
    setAddress: any,
}

const ProfileCard:FC<ProfileCardProps> = (props) => {
    const {t, i18n} = useTranslation();
    const { data, changeProfileData,
            userSignOut, firstName,
            lastName, email, address,
            setAddress, setEmail,
            setLastName, setFirstName } = props;
    const [file, setFile] = useState();
    const [editMode, setEditMode] = useState<boolean>(false);


    const uploadAvatar = (event:any) => {
        //@ts-ignore
        setFile(URL.createObjectURL(event.target.files[0]));
    }


    return (
        <div>
            {editMode ? ( <div className={"profileCardEdit"}>
                    <input className={"avatarLoader"} type="file" onChange={uploadAvatar}/>
                    <AvatarImage image={file} />
                    <ProfileDetailsInput initialFieldValue={data.firstName} changeFieldValue={setFirstName}
                                         type={"firstName"} labelName={t("First Name")} placeholder={"John"} />
                    <ProfileDetailsInput initialFieldValue={data.lastName} changeFieldValue={setLastName}
                                         type={"lastName"} labelName={t("Last Name")} placeholder={"Doe"} />
                    <ProfileDetailsInput initialFieldValue={data.email} changeFieldValue={setEmail}
                                         type={"email"} labelName={t("Email")} placeholder={"example@email.com"} />
                    <ProfileDetailsInput initialFieldValue={data.address} changeFieldValue={setAddress}
                                         type={"address"} labelName={t("Address 1")} placeholder={"Ada-Lovelace, 21"} />
                    <Button onClick={()=> {
                        changeProfileData();
                        setEditMode(false);
                    }} className={"default"} buttonText={t("Save")}/>
                </div>
            ) : ( <div className={"profileCard"}>
                    <AvatarImage image={file} />
                    <StyledText>{data.firstName}</StyledText>
                    <StyledText>{data.lastName}</StyledText>
                    <StyledText>{data.email}</StyledText>
                    <StyledText>{data.address}</StyledText>
                    <Button onClick={()=> setEditMode(true)} className={"default"} buttonText={t("Edit")}/>
                    <Button onClick={userSignOut} className={"default"} buttonText={t("Logout")}/>
                </div> )
            }
        </div>
    );
};

export default ProfileCard;