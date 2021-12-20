import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

export const usePhoneForm = () => {
    const navigate = useNavigate();

    const validationSchema = yup.object({
        phoneNumber: yup.string().required()
    });

    const formik = useFormik({
        initialValues: {
            phoneNumber: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if (values) navigate('/enroll/address');
        }
    });

    return {
        formik
    };
};
