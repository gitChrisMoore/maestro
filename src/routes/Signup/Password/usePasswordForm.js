import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../contexts/Auth';

export const usePasswordForm = () => {
    const navigate = useNavigate();
    const { state: email } = useLocation();
    const { signUp } = useAuth();

    const handleSignup = async (signupDetails) => {
        const { user, error } = await signUp(signupDetails);
        if (error) throw error;
        return user;
    };

    const validateSignupFields = async (values) => {
        if (!values.password) throw Error('validateSignupFields - error - password');
        if (email && values.password) {
            return { email: email, password: values.password };
        }
    };

    const handelSubmit = async (values) => {
        let validSignup = await validateSignupFields(values);
        if (validSignup) {
            let user = await handleSignup(validSignup);
            if (user) navigate('/auth/enroll/person');
            else console.log('error on handle submit');
        }
    };

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
        onSubmit: handelSubmit
    });

    return {
        formik,
        validateSignupFields,
        handelSubmit,
        handleSignup
    };
};
