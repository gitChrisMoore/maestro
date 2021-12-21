import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import PersonInterface from '../../../../lib/domain/person/PersonInterface';
import { useAuth } from '../../../../contexts/Auth';

export const useDateofBirthForm = () => {
    const navigate = useNavigate();
    const { updateDateofBirth } = PersonInterface();
    const { user } = useAuth();

    const handleSubmit = async (values) => {
        if (values) {
            let { error } = await updateDateofBirth(user.id, values.dateofBirth);
            if (error) alert('error: submitting birthday');
            else navigate('/auth/enroll/phone');
        } else alert('error: form not filled out');
    };

    const validationSchema = yup.object({
        dateofBirth: yup.date('Enter a valid Birthdate').required('Birth date is required')
    });

    const formik = useFormik({
        initialValues: {
            dateofBirth: ''
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit
    });

    return {
        formik,
        handleSubmit
    };
};
