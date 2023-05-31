import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const LoginPage = (props) => {
  return (
    <AuthLayouts title="Login" text="for login">
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
