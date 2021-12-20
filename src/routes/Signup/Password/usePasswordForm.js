import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../contexts/Auth';

export const usePasswordForm = () => {
    const navigate = useNavigate();
    const { state: email } = useLocation();
    const { signUp } = useAuth();

    const validationSchema = yup.object({
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required')
    });

    const formik = useFormik({
        initialValues: {
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            const newAccount = {
                email: email,
                password: values.password
            };
            const res = await signUp(newAccount);
            console.log('res', res);
            if (res) navigate('/auth/enroll/name');
        }
    });

    return {
        formik
    };
};
