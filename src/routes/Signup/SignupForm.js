import { TextFormField } from '../../lib/components/FormFields/TextFormField';
import { SubmitFormButton } from '../../lib/components/FormFields/SubmitFormButton';
import { useFormik, FormikProvider, Field, Form } from 'formik';
import * as yup from 'yup';
import { useAuth } from '../../contexts/Auth';
import { useNavigate } from 'react-router-dom';

export function SignupForm() {
    const navigate = useNavigate();
    const { signUp } = useAuth();

    const handleSubmit = async (loginValues) => {
        signUp(loginValues)
            .then(({ error }) => {
                if (error) throw new Error(error.message);
                navigate('/auth/enroll/person');
            })
            .catch((e) => {
                console.log(e);
                alert(e.message);
            });
    };

    const validationSchema = yup.object({
        email: yup.string().required(),
        password: yup.string().required()
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit
    });
    return (
        <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
                <Field name="email" component={TextFormField} />
                <Field name="password" component={TextFormField} />
                <Field name="Sign Up" data-testid="submitForm" component={SubmitFormButton} />
            </Form>
        </FormikProvider>
    );
}
