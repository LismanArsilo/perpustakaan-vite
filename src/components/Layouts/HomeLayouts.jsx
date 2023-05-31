import FooterUser from "../Fragments/FooterUser";
import HeaderUser from "../Fragments/HeaderUser";

const HomeLayouts = (props) => {
  const { children } = props;
  return (
    <div className="min-h-screen border border-slate-600">
      <HeaderUser />
      <div className="mt-5">
        <p>ini Body</p>
      </div>
      <FooterUser />
    </div>
  );
};

export default HomeLayouts;
