import {
    TextField,
    Button } from '@mui/material/';
import { useEmailCapture } from './useEmailCapture';

export function EmailCapture() {
    const {
        email,
        handleEmailChange,
        handleEmailCaptureClick
    } = useEmailCapture();
    
    return (
        <>
            <TextField
                id="email"
                label="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                autoComplete="email"
            
            />
            <Button 
                variant="contained"
                color="primary"
                onClick={handleEmailCaptureClick}
                >
                Get Started
            </Button>
        </>
    )
}


