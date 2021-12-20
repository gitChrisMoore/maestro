import {
    TextField,
    Button } from '@mui/material/';
import { useLoginForm } from "./useLoginForm"

export function LoginForm() {
    const {
        formik
    } = useLoginForm();
    
    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                id="email"
                data-testid="email"
                name="email"
                label="Email Address"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
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

            <Button color="primary" variant="contained" fullWidth type="submit" data-testid="submitLoginForm">
            Login
            </Button>
        </form>
    )
}