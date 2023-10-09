import React from "react";

export const validateNameField = (field: string, setErrorName: React.Dispatch<React.SetStateAction<string | null>>):boolean => {
    if(field.length < 1) {
        setErrorName('Cannot be blank');
        return false;
    }
    setErrorName(null);
    return true;
};

export const validateEmail = (email: string, setEmailError: React.Dispatch<React.SetStateAction<string | null>>):boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!emailRegex.test(email)) {
        setEmailError('Invalid email format');
        return false;
    }
    setEmailError(null);
    return true;
};

export const validatePassword = (password: string, setPasswordError: React.Dispatch<React.SetStateAction<string | null>>):boolean => {
    if(password.length < 8) {
        setPasswordError('Password must be 8 or more characters');
        return false;
    }
    setPasswordError(null);
    return true;
};