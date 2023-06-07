import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import DashboardPage from "./pages/Dashboard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/authContext/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);
  const [userLogin, setUserLogin] = useState({});
  useEffect(() => {
    const userLocal = JSON.parse(localStorage.getItem("User"));
    if (userLocal) {
      setUserLogin(userLocal);
    }
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
