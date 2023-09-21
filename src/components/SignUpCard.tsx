import React, {FC} from 'react';
import DetailsInput from "./ui-components/DetailsInput";
import {Button} from "./ui-components/Button";



const SignUpCard = () => {

    return (
        <div className={"profileCardEdit"}>
            <DetailsInput placeholder={"example@email.com"} labelName={("Email")} type={"email"} />
            <DetailsInput labelName={("Password")} type={"password"} />
            <Button onClick={()=>"/"} className={"default"} buttonText={"Create"}/>
        </div>
    );
};

export default SignUpCard;