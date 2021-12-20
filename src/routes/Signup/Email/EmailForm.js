import {
    TextField,
    Button } from '@mui/material/';
import { useEmailForm } from './useEmailForm';

export function EmailForm() {
    const {
        formik
    } = useEmailForm();
    
    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                id="email"
                data-testid="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />

            <Button color="primary" variant="contained" fullWidth type="submit" data-testid="submitEmailForm">
            Let's go
            </Button>
        </form>
    )
}
