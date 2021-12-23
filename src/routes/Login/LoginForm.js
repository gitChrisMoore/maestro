import { TextFormField } from '../../lib/components/FormFields/TextFormField';
import { SubmitFormButton } from '../../lib/components/FormFields/SubmitFormButton';
import { useFormik, FormikProvider, Field, Form } from 'formik';
import * as yup from 'yup';
import { useAuth } from '../../contexts/Auth';
import { useNavigate } from 'react-router-dom';
import BoxMain from '../../components/BoxMain/BoxMain';

export function LoginForm() {
    const navigate = useNavigate();
    const { signIn } = useAuth();

    const handleSubmit = async (loginValues) => {
        signIn(loginValues)
            .then(({ error }) => {
                if (error) throw new Error(error.message);
                navigate('/auth/dashboard');
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
        <BoxMain title="Login">
            <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit}>
                    <Field name="email" component={TextFormField} />
                    <Field name="password" component={TextFormField} />
                    <Field name="Log in" data-testid="submitForm" component={SubmitFormButton} />
                </Form>
            </FormikProvider>
        </BoxMain>
    );
}
