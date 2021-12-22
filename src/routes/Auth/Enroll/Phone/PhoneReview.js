/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import { TextFormField } from '../../../../lib/components/FormFields/TextFormField';
import { SubmitFormButton } from '../../../../lib/components/FormFields/SubmitFormButton';
import { useFormik, FormikProvider, Field, Form } from 'formik';
import { Grid } from '@mui/material';

export function PhoneReview(props) {
    const { formValues } = props;

    const formik = useFormik({
        initialValues: {
            phoneNumber: formValues.phoneNumber || '_'
        },
        enableReinitialize: true,
        onSubmit: () => {}
    });
    return (
        <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
                <Grid container>
                    <Grid item sx={{ flexGrow: 1 }}>
                        <Field
                            name="phoneNumber"
                            disabled={true}
                            variant="filled"
                            component={TextFormField}
                        />
                    </Grid>
                </Grid>
                <Field
                    name="Edit Phone Number"
                    data-testid="submitForm"
                    component={SubmitFormButton}
                />
            </Form>
        </FormikProvider>
    );
}
