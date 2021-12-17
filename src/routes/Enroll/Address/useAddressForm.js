import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";

export const useAddressForm = () => {
    const navigate = useNavigate()

    const validationSchema = yup.object({
        address1: yup
            .string()
            .required(),
        city: yup
            .string()
            .required(),
        state: yup
            .string()
            .required(),
        postalCode: yup
            .string()
            .required(),
    });

    const formik = useFormik({
        initialValues: {
            address1: '',
            address2: '',
            city: '',
            state: '',
            postalCode: '',
            country: 'US',
          
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            
            console.log('values', values);
            if (values) navigate('/enroll/confirm');
        },
    });

    return {
        formik
    };  
};