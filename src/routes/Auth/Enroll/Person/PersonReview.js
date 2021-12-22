/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import { TextFormField } from '../../../../lib/components/FormFields/TextFormField';
import { SubmitFormButton } from '../../../../lib/components/FormFields/SubmitFormButton';
import { useFormik, FormikProvider, Field, Form } from 'formik';
import { Grid } from '@mui/material';

export function PersonReview(props) {
    const { formValues } = props;

    const formik = useFormik({
        initialValues: {
            firstName: formValues.firstName || '_',
            lastName: formValues.lastName || '_',
            dateofBirth: formValues.dateofBirth || '_'
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
                            name="firstName"
                            disabled={true}
                            variant="filled"
                            component={TextFormField}
                        />
                    </Grid>
                    <Grid item sx={{ flexGrow: 1, ml: 2, mr: 2 }}>
                        <Field
                            name="lastName"
                            disabled={true}
                            variant="filled"
                            component={TextFormField}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Field
                            name="dateofBirth"
                            disabled={true}
                            variant="filled"
                            component={TextFormField}
                        />
                    </Grid>
                </Grid>
                <Field
                    name="Edit Personal Details"
                    data-testid="submitForm"
                    component={SubmitFormButton}
                />
            </Form>
        </FormikProvider>
    );
}
