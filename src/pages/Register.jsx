import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const Register = (props) => {
  return (
    <AuthLayouts title="Register" text="for register">
      <FormRegister />
      <div className="w-full flex justify-center mt-3">
        <p className="text-sm">
          You have an account? Please
          <Link to="/login" className="text-blue-500 underline ms-1">
            Login
          </Link>
        </p>
      </div>
    </AuthLayouts>
  );
};

export default Register;
