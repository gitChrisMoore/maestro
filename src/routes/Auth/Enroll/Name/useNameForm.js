import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";

export const useNameForm = () => {
    const navigate = useNavigate()

    const validationSchema = yup.object({
        firstName: yup
            .string('Enter your firstname')
            .min(2, 'Firstname should be more than 2 chars')
            .required('Firstname is required'),
        lastName    : yup
            .string('Enter your last name')
            .min(2, 'Lastname should be more than 2 chars')
            .required('lastname is required'),
    });

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            
            if (values) navigate('/enroll/dateofbirth');
        },
    });

    return {
        formik
    };  
};