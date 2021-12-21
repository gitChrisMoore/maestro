import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import PersonInterface from '../../../../lib/domain/person/PersonInterface';
import { useAuth } from '../../../../contexts/Auth';

export const useNameForm = () => {
    const navigate = useNavigate();
    const { createPerson } = PersonInterface();
    const { user } = useAuth();

    const handleSubmit = async (name) => {
        if (name) {
            name['user_id'] = user.id;
            let { error } = await createPerson(name);
            if (error) alert('error: submitting birthday');
            else navigate('/auth/enroll/dateofbirth');
        } else alert('error: form not filled out');
    };

    const validationSchema = yup.object({
        firstName: yup
            .string('Enter your firstname')
            .min(2, 'Firstname should be more than 2 chars')
            .required('Firstname is required'),
        lastName: yup
            .string('Enter your last name')
            .min(2, 'Lastname should be more than 2 chars')
            .required('lastname is required')
    });

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: ''
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit
    });

    return {
        formik,
        handleSubmit
    };
};
