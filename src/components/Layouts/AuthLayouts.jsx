import FormLogin from "../Fragments/FormLogin";

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
      </div>
    </div>
  );
};

export default AuthLayouts;
