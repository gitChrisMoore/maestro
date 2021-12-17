import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";

export const useDateofBirthForm = () => {
    const navigate = useNavigate()

    const validationSchema = yup.object({
        dateofBirth: yup
            .date('Enter a valid Birthdate')
            .required('Birth date is required'),
    });

    const formik = useFormik({
        initialValues: {
            dateofBirth: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            
            console.log('values', values);
            if (values) navigate('/enroll/phone');
        },
    });

    return {
        formik
    };  
};