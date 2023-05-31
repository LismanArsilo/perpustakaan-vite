import FooterUser from "../Fragments/FooterUser";
import HeaderUser from "../Fragments/HeaderUser";

const HomeLayouts = (props) => {
  const { children } = props;
  return (
    <div className="">
      <HeaderUser />
      <div className="mt-5">
        <p>ini Body</p>
      </div>
      <FooterUser />
    </div>
  );
};

export default HomeLayouts;
