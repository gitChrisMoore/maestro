/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import { TextFormField } from '../../../../lib/components/FormFields/TextFormField';
import { SubmitFormButton } from '../../../../lib/components/FormFields/SubmitFormButton';
import { useFormik, FormikProvider, Field, Form } from 'formik';
import { Grid } from '@mui/material';

export function AddressReview(props) {
    const { formValues } = props;

    const formik = useFormik({
        initialValues: {
            address1: formValues.address1 || '_',
            address2: formValues.address2 || '_',
            city: formValues.city || '_',
            state: formValues.state || '_',
            postalCode: formValues.postalCode || '_',
            country: 'US'
        },
        enableReinitialize: true,
        onSubmit: () => {}
    });
    return (
        <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
                <Field name="address1" disabled={true} variant="filled" component={TextFormField} />
                <Field name="address2" disabled={true} variant="filled" component={TextFormField} />
                <Grid container>
                    <Grid item sx={{ flexGrow: 1 }}>
                        <Field
                            name="city"
                            disabled={true}
                            variant="filled"
                            component={TextFormField}
                        />
                    </Grid>
                    <Grid item xs={3} sx={{ ml: 2, mr: 2 }}>
                        <Field
                            name="state"
                            disabled={true}
                            variant="filled"
                            component={TextFormField}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Field
                            name="postalCode"
                            disabled={true}
                            variant="filled"
                            component={TextFormField}
                        />
                    </Grid>
                </Grid>
                <Field name="Edit Address" data-testid="submitForm" component={SubmitFormButton} />
            </Form>
        </FormikProvider>
    );
}
