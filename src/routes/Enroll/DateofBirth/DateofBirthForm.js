import {
    TextField,
    Button } from '@mui/material/';
import { useDateofBirthForm } from "./useDateofBirthForm"

export function DateofBirthForm() {
    const {
        formik
    } = useDateofBirthForm();
    
    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                id="dateofBirth"
                name="dateofBirth"
                label="Birth Date"
                value={formik.values.dateofBirth}
                onChange={formik.handleChange}
                error={formik.touched.dateofBirth && Boolean(formik.errors.dateofBirth)}
                helperText={formik.touched.dateofBirth && formik.errors.dateofBirth}
            />

            <Button color="primary" variant="contained" fullWidth type="submit">
            Next
            </Button>
        </form>
    )
}