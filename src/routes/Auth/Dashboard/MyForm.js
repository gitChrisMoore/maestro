import React from 'react';
import { Formik, Field, Form } from 'formik';

export const useMyForm = ({ createNewThingy }) => {
    const handleSubmit = async (values) => {
        console.log('made it to handle submit submit');
        await sleep(500);
        createNewThingy(values);
    };
    return {
        handleSubmit
    };
};

export const MyForm = ({ createNewThingy }) => {
    const { handleSubmit } = useMyForm({ createNewThingy });
    return (
        <div>
            <h1>Sign Up</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: ''
                }}
                onSubmit={handleSubmit}>
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" placeholder="Jane" />

                    <label htmlFor="lastName">Last Name</label>
                    <Field id="lastName" name="lastName" placeholder="Doe" />

                    <label htmlFor="email">Email</label>
                    <Field id="email" name="email" placeholder="jane@acme.com" type="email" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};
