import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const Login = (props) => {
  return (
    <AuthLayouts title="Login" text="for login">
      <FormLogin />
      <div className="w-full flex justify-center mt-3">
        <p className="text-sm">
          Don't have an account? Please
          <Link to="/register" className="text-blue-500 underline ms-1">
            Sign In
          </Link>
        </p>
      </div>
    </AuthLayouts>
  );
};

export default Login;
