import { TextFormField } from '../../../../lib/components/FormFields/TextFormField';
import { SubmitFormButton } from '../../../../lib/components/FormFields/SubmitFormButton';
import { useFormik, FormikProvider, Field, Form } from 'formik';
import * as yup from 'yup';
import { createAddress } from '../../../../lib/domain/address/Address';
import { useAuth } from '../../../../contexts/Auth';
import { useNavigate } from 'react-router-dom';
import BoxMain from '../../../../components/BoxMain/BoxMain';
import { Grid } from '@material-ui/core';

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
        <BoxMain title="Address">
            <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit}>
                    <Grid container>
                        <Field name="address1" component={TextFormField} />
                        <Field name="address2" component={TextFormField} />
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Field name="city" component={TextFormField} />
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                {/* <Box sx={{ pl: 2, pr: 2 }}> */}
                                <Field name="state" component={TextFormField} />
                                {/* </Box> */}
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Field name="postalCode" sx={{ xs: 2 }} component={TextFormField} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Field
                        name="submitForm"
                        data-testid="submitForm"
                        component={SubmitFormButton}
                    />
                </Form>
            </FormikProvider>
        </BoxMain>
    );
}
