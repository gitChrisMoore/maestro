import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/Auth"


import Enroll from "./Enroll/Enroll";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
            <Routes>
                <Route path='/enroll/*' element={<Enroll/>} />
            </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
