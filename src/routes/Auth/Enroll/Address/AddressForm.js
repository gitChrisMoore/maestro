import {
    TextFormField,
    SubmitFormButton
} from '../../../../lib/components/FormFields/TextFormField';
import { useFormik, FormikProvider, Field, Form } from 'formik';
import * as yup from 'yup';
import { createAddress } from '../../../../lib/domain/address/Address';

export function AddressForm() {
    const handleSubmit = async (uiAddress) => {
        const newAddress = await createAddress(uiAddress);
        return;
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
