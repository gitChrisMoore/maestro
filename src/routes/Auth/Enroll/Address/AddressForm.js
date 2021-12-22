import { TextFormField } from '../../../../lib/components/FormFields/TextFormField';
import { SubmitFormButton } from '../../../../lib/components/FormFields/SubmitFormButton';
import { useFormik, FormikProvider, Field, Form } from 'formik';
import * as yup from 'yup';
import { createAddress } from '../../../../lib/domain/address/Address';
import { useAuth } from '../../../../contexts/Auth';
import { useNavigate } from 'react-router-dom';

export function AddressForm() {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (address) => {
        address.user_id = user.id;
        createAddress(address)
            .then(() => {
                navigate('/auth/enroll/review');
            })
            .catch((e) => {
                console.log(e);
                alert(e.message);
            });
    };

    const validationSchema = yup.object({
        address1: yup.string().required(),
        address2: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        postalCode: yup.string().required()
    });

    const formik = useFormik({
        initialValues: {
            address1: '',
            address2: '',
            city: '',
            state: '',
            postalCode: '',
            country: 'US'
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit
    });
    return (
        <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
                <Field name="address1" component={TextFormField} />
                <Field name="address2" component={TextFormField} />
                <Field name="city" component={TextFormField} />
                <Field name="state" component={TextFormField} />
                <Field name="postalCode" component={TextFormField} />
                <Field name="submitForm" data-testid="submitForm" component={SubmitFormButton} />
            </Form>
        </FormikProvider>
    );
}
