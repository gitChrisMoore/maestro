// import { Button } from '@mui/material/';
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { Field, FormikProvider } from 'formik';
import { TextFormField } from '../../../../lib/components/FormFields/TextFormField';
import { SubmitFormButton } from '../../../../lib/components/FormFields/SubmitFormButton';
import { useConfirmForm } from './useConfirmForm';

export function ConfirmForm() {
    const { formik } = useConfirmForm();
    return (
        <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>
                <Field name="username" label="Username" component={TextFormField} />
                <Field name="submitForm" component={SubmitFormButton} />
            </form>
        </FormikProvider>
    );
}
