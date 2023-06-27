import React from 'react';
import * as yep from "yup";

export const signUpValidator = yep.object
({
    userName: yep.string().trim().required("name is required"),
    userEmail: yep.string().trim().required("email is required"),
    userNumber: yep.string().trim().required("mob no is required"),
    userPassword: yep.string().trim().required("password is required")
})