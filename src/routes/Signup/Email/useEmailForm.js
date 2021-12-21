import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

export const useEmailForm = () => {
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        if (!values?.email) {
            throw new Error('no email found');
        }
        navigate('/signup/password', { state: values.email });
    };

    const validationSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required')
    });

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit
    });

    return {
        formik,
        handleSubmit
    };
};
