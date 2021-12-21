/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

// import { Form, Field, getIn, FormikProps } from 'formik';
import { getIn } from 'formik';
import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

export const TextFormField = ({ field, form, ...props }) => {
    const errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name);
    return (
        <TextField
            fullWidth
            id={field.name}
            label={field.name}
            margin="normal"
            helperText={errorText}
            error={!!errorText}
            // onChange={(e) => props.form.setFieldValue(props.field.name, e.target.value)}
            {...field}
            {...props}
        />
    );
};

TextFormField.propTypes = {
    form: PropTypes.object,
    field: PropTypes.object
};
