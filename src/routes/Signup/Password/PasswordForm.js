import { TextField, Button } from '@mui/material/';
import { usePasswordForm } from './usePasswordForm';

export function PasswordForm() {
    const { formik } = usePasswordForm();

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                id="password"
                data-testid="password"
                name="password"
                label="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />

            <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
                data-testid="submitPasswordForm">
                Next
            </Button>
        </form>
    );
}
