import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth';

export const useLoginForm = () => {
    const navigate = useNavigate();
    const { signIn } = useAuth();

    const handleSubmit = async (loginValues) => {
        let { session, error } = await signIn(loginValues);
        if (session) {
            navigate('/auth/dashboard');
        } else alert('error: ', error);
    };

    const validationSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup.string('Enter your password').required('Password is required')
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit
    });

    return {
        formik,
        handleSubmit
    };
};
