import { useState, createContext } from "react";
import { Link } from "react-router-dom";

export const AuthContext = createContext();

const DashboardPage = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <p>Halaman Dashboard</p>
    </div>
  );
};

export default DashboardPage;
