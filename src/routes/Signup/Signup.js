import { Route, Routes } from 'react-router-dom';

import { EmailForm } from './Email/EmailForm';
import { PasswordForm } from './Password/PasswordForm';

function Signup() {
    return (
        <div>
            <Routes>
                {/* <Route path='/' element={<EmailForm/>} /> */}
                <Route path="email" element={<EmailForm />} />
                <Route path="password" element={<PasswordForm />} />
            </Routes>
        </div>
    );
}

export default Signup;
