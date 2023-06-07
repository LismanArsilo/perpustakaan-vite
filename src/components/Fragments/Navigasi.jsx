import { Logout } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { authLogout } from "../../api/authenticationApi";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useContext } from "react";

const Navigasi = () => {
  const { user, isLoading, error } = useContext(AuthContext);
  const navigate = useNavigate();
  // Handle Logout
  const handleLogOut = () => {
    const token = JSON.parse(localStorage.getItem("Authorization"));
    authLogout(token).then((res) => {
      if (res.status) {
        navigate("/login");
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: "success",
          title: "Logout Successfully",
        });
      }
    });
  };

  return (
    <nav className="h-12 flex items-center px-10 bg-blue-800 min-w-min gap-2 sticky top-0">
      <div className="font-extrabold italic text-xl me-auto">
        <Link to="/">
          Perpustakaan <span className="text-white">Online</span>
        </Link>
      </div>
      <div className="flex gap-7 text-lg font-semibold">
        <Link to="/" className="px-2 py-1 rounded-xl">
          Home
        </Link>
        <Link to="/profile" className="px-2 py-1 rounded-xl">
          Profile
        </Link>
        <Link to="/gallery" className="px-2 py-1 rounded-xl">
          Gallery
        </Link>
      </div>
      <div
        className="flex mx-3 gap-2 font-semibold text-lg items-center hover:cursor-pointer"
        onClick={() => handleLogOut()}
      >
        <button className="">Logout</button>
        <Logout />
      </div>
    </nav>
  );
};

export default Navigasi;
