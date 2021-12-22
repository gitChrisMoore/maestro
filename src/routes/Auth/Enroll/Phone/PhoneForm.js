import { TextFormField } from '../../../../lib/components/FormFields/TextFormField';
import { SubmitFormButton } from '../../../../lib/components/FormFields/SubmitFormButton';
import { useFormik, FormikProvider, Field, Form } from 'formik';
import * as yup from 'yup';
import { createPhone } from '../../../../lib/domain/phone/Phone';
import { useAuth } from '../../../../contexts/Auth';
import { useNavigate } from 'react-router-dom';

export function PhoneForm() {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (phone) => {
        phone.user_id = user.id;
        createPhone(phone)
            .then(() => {
                navigate('/auth/enroll/address');
            })
            .catch((e) => {
                console.log(e);
                alert(e.message);
            });
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
    return (
        <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
                <Field name="phoneNumber" component={TextFormField} />
                <Field name="submitForm" data-testid="submitForm" component={SubmitFormButton} />
            </Form>
        </FormikProvider>
    );
}
