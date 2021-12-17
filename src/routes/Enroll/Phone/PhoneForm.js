import {
    TextField,
    Button } from '@mui/material/';
import { usePhoneForm } from "./usePhoneForm"

export function PhoneForm() {
    const {
        formik
    } = usePhoneForm();
    
    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                id="phoneNumber"
                name="phoneNumber"
                label="Mobile Phone Number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            />

            <Button color="primary" variant="contained" fullWidth type="submit">
            Next
            </Button>
        </form>
    )
}