import {
    TextField,
    Button } from '@mui/material/';
import { useNameForm } from "./useNameForm"

export function NameForm() {
    const {
        formik
    } = useNameForm();
    
    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                id="firstName"
                data-testid="firstName"
                name="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
                fullWidth
                id="lastName"
                data-testid="lastName"
                name="lastName"
                label="Last name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
            />

            <Button color="primary" variant="contained" fullWidth type="submit" data-testid="submitDateofBirthForm">
            Next
            </Button>
        </form>
    )
}