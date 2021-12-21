import { useFormik } from 'formik';
import * as yup from 'yup';

export const useConfirmForm = () => {
    const handleSubmit = async (values) => {
        console.log('handleSubmit', values);
    };

    const validationSchema = yup.object({
        username: yup
            .string('Enter your firstname')
            .min(2, 'Firstname should be more than 2 chars')
            .required('Firstname is required')
    });

    const formik = useFormik({
        initialValues: {
            username: ''
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit
    });

    return {
        formik,
        handleSubmit
    };
};
