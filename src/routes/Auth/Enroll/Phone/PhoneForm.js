import { TextField, Button } from '@mui/material/';
import { usePhoneForm } from './usePhoneForm';

export function PhoneForm() {
    const { formik } = usePhoneForm();

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                id="phoneNumber"
                data-testid="phoneNumber"
                name="phoneNumber"
                label="Phone number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            />

            <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
                data-testid="submitPhoneForm">
                Next
            </Button>
        </form>
    );
}
