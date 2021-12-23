import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../contexts/Auth';

import { SignupForm } from './Signup/SignupForm';
import { LoginForm } from './Login/LoginForm';
import Enroll from './Auth/Enroll/Enroll';
import Dashboard from './Auth/Dashboard/Dashboard';
import { MSWTest } from './Auth/Dashboard/MSWTest';

import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { CssBaseline } from '@mui/material';
// import { blue, red } from '@material-ui/core/colors';

// import { ThemeProvider, createTheme } from '@mui/material/styles';

const themeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: '#3f51b5'
        },
        secondary: {
            main: '#f50057'
        }
    }
};

const theme = createTheme(themeOptions);
// </ThemeProvider>;

function App() {
    return (
        <div className="App">
            {/* <CssBaseline /> */}
            <ThemeProvider theme={theme}>
                {/* <CssBaseline /> */}
                <Router>
                    <AuthProvider>
                        <Routes>
                            {/* @TODO Replace with Layout */}
                            {/* <Route path="/" element={<Dashboard />}> */}
                            {/* <Route index element={<Dashboard />} /> */}
                            <Route path="/" element={<Dashboard />} />
                            <Route path="mswtest/*" element={<MSWTest />} />
                            <Route path="signup/*" element={<SignupForm />} />
                            <Route path="/login/*" element={<LoginForm />} />
                            <Route path="/signin/*" element={<LoginForm />} />
                            <Route path="/auth/enroll/*" element={<Enroll />} />
                            <Route path="/auth/dashboard/*" element={<Dashboard />} />
                            {/* </Route> */}
                        </Routes>
                    </AuthProvider>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
