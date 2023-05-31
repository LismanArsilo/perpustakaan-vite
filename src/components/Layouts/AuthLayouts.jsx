import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { title, children, text } = props;
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold text-blue-600 mb-1">{title}</h1>
        <p className="font-medium text-slate-500 mb-3">
          Welcome, Please enter your details {text}
        </p>
        {children}
        <div className="w-full flex justify-center mt-3">
          {title == "Login" ? (
            <p className="text-sm">
              Don't have an account? Please
              <Link to="/register" className="text-blue-500 underline ms-1">
                Register
              </Link>
            </p>
          ) : (
            <p className="text-sm">
              Already have an account ?
              <Link to="/login" className="text-blue-500 underline ms-1">
                Login
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthLayouts;
