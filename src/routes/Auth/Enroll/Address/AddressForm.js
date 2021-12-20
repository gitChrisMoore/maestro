import {
    TextField,
    Button } from '@mui/material/';
import { useAddressForm } from "./useAddressForm"

export function AddressForm() {
    const {
        formik
    } = useAddressForm();
    
    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                id="address1"
                data-testid="address1"
                name="address1"
                label="Address 1"
                value={formik.values.address1}
                onChange={formik.handleChange}
                error={formik.touched.address1 && Boolean(formik.errors.address1)}
                helperText={formik.touched.address1 && formik.errors.address1}
            />
            <TextField
                fullWidth
                id="address2"
                data-testid="address2"
                name="address2"
                label="Address 2"
                value={formik.values.address2}
                onChange={formik.handleChange}
                error={formik.touched.address2 && Boolean(formik.errors.address2)}
                helperText={formik.touched.address2 && formik.errors.address2}
            />
            <TextField
                fullWidth
                id="city"
                data-testid="city"
                name="city"
                label="City"
                value={formik.values.city}
                onChange={formik.handleChange}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
            />
            <TextField
                fullWidth
                id="state"
                data-testid="state"
                name="state"
                label="State"
                value={formik.values.state}
                onChange={formik.handleChange}
                error={formik.touched.state && Boolean(formik.errors.state)}
                helperText={formik.touched.state && formik.errors.state}
            />
            <TextField
                fullWidth
                id="postalCode"
                data-testid="postalCode"
                name="postalCode"
                label="Zip Code"
                value={formik.values.postalCode}
                onChange={formik.handleChange}
                error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
                helperText={formik.touched.postalCode && formik.errors.postalCode}
            />

            <Button color="primary" variant="contained" fullWidth type="submit" data-testid="submitAddressForm">
            Review
            </Button>
        </form>
    )
};