/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

// import { Form, Field, getIn, FormikProps } from 'formik';
// import { Form } from 'formik';
// import { getIn } from 'formik';
import React from 'react';
import { Button } from '@mui/material/';
import PropTypes from 'prop-types';

export const SubmitFormButton = ({ field, form, ...props }) => {
    return (
        <Button
            fullWidth
            id={field.name}
            label={field.name}
            margin="normal"
            // type="submit"
            onClick={form.submitForm}
            {...props}>
            {field.name}
        </Button>
    );
};

SubmitFormButton.propTypes = {
    field: PropTypes.object,
    form: PropTypes.object
};
