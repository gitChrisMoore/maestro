import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../contexts/Auth';

import { SignupForm } from './Signup/SignupForm';
import { LoginForm } from './Login/LoginForm';
import Enroll from './Auth/Enroll/Enroll';
import Dashboard from './Auth/Dashboard/Dashboard';

function App() {
    return (
        <div className="App">
            <Router>
                <AuthProvider>
                    <Routes>
                        {/* @TODO Replace with Layout */}
                        {/* <Route path="/" element={<Dashboard />}> */}
                        {/* <Route index element={<Dashboard />} /> */}
                        <Route path="/" element={<Dashboard />} />
                        <Route path="signup/*" element={<SignupForm />} />
                        <Route path="/login/*" element={<LoginForm />} />
                        <Route path="/signin/*" element={<LoginForm />} />
                        <Route path="/auth/enroll/*" element={<Enroll />} />
                        <Route path="/auth/dashboard/*" element={<Dashboard />} />
                        {/* </Route> */}
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;
