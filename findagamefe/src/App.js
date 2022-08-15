import React from "react";
import SignUp from "./security/signup";
import LogIn from "./security/login";
import LogOut from "./security/LogOut";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { AuthProvider } from "./security/authContext";
import NotFound from "./components/NotFound";
import RequireAuth from "./security/RequireAuth";
import ForgotPassword from "./security/forgotPassword";
import UpdateProfile from "./security/updateProfile";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/password-reset" element={<ForgotPassword />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
