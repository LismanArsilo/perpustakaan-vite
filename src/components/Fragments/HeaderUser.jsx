import { Logout } from "@mui/icons-material";
import { Link } from "react-router-dom";

const HeaderUser = () => {
  return (
    <nav className="h-12 border border-slate-700 flex justify-between items-center px-10 bg-blue-500 min-w-min gap-2">
      <div className="font-extrabold italic text-xl">
        <Link to="/">
          Perpustakaan <span className="text-white">Online</span>
        </Link>
      </div>
      <div className="flex gap-10 text-lg font-semibold">
        <Link to="/" className="hover:bg-gray-100 px-2 py-1 rounded-xl">
          Home
        </Link>
        <Link to="/profile" className="hover:bg-gray-100 px-2 py-1 rounded-xl">
          Profile
        </Link>
        <Link to="/gallery" className="hover:bg-gray-100 px-2 py-1 rounded-xl">
          Gallery
        </Link>
      </div>
      <div className="flex me-3 gap-3">
        <Logout />
        <p className="text-sm">Logout</p>
      </div>
    </nav>
  );
};

export default HeaderUser;
