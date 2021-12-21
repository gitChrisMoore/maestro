import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

export const usePhoneForm = () => {
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        if (values) {
            navigate('/enroll/address');
        } else alert('error: form not filled out');
    };

    const validationSchema = yup.object({
        phoneNumber: yup.string().required()
    });

    const formik = useFormik({
        initialValues: {
            phoneNumber: ''
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit
    });

    return {
        formik,
        handleSubmit
    };
};
