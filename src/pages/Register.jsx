import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const RegisterPage = (props) => {
  return (
    <AuthLayouts title="Register" text="for register">
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
