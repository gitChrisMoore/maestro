import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../contexts/Auth';

import Signup from './Signup/Signup';
import Login from './Login/Login';
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
                        <Route path="signup/*" element={<Signup />} />
                        <Route path="/login/*" element={<Login />} />
                        <Route path="/auth/enroll/*" element={<Enroll />} />
                        <Route path="/dashboard/" element={<Dashboard />} />
                        {/* </Route> */}
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;
