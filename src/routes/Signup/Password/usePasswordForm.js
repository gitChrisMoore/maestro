import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";

export const usePasswordForm = () => {
    const navigate = useNavigate()

    const validationSchema = yup.object({
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            
            if (values) navigate('/auth/enroll/name');
        },
    });

    return {
        formik
    };  
};