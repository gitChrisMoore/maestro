import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
// import { useState } from 'react';


export const useEmailForm = () => {
    const navigate = useNavigate()

    const validationSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            
            console.log('values', values);
            if (values.email) navigate('/enroll/password', {state: values.email});
        },
    });

    return {
        formik
    };  
};