import { useState, createContext } from "react";
import { Link } from "react-router-dom";

export const AuthContext = createContext();

const DashboardPage = () => {
  const [authenticated, setAuthenticated] = useState(null);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      <div>
        <Link to="/">Home</Link>
        <p>Halaman Dashboard</p>
      </div>
    </AuthContext.Provider>
  );
};

export default DashboardPage;
