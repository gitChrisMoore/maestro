import { TextFormField } from '../../../../lib/components/FormFields/TextFormField';
import { SubmitFormButton } from '../../../../lib/components/FormFields/SubmitFormButton';
import { useFormik, FormikProvider, Field, Form } from 'formik';
import * as yup from 'yup';
import { createPerson } from '../../../../lib/domain/person/Person';
import { useAuth } from '../../../../contexts/Auth';
import { useNavigate } from 'react-router-dom';

export function PersonForm() {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (person) => {
        person.user_id = user.id;
        createPerson(person)
            .then(() => {
                navigate('/auth/enroll/phone');
            })
            .catch((e) => {
                console.log(e);
                alert(e.message);
            });
    };

    const validationSchema = yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        dateofBirth: yup.string().required()
    });

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            dateofBirth: ''
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit
    });
    return (
        <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
                <Field name="firstName" component={TextFormField} />
                <Field name="lastName" component={TextFormField} />
                <Field name="dateofBirth" component={TextFormField} />
                <Field name="submitForm" data-testid="submitForm" component={SubmitFormButton} />
            </Form>
        </FormikProvider>
    );
}
