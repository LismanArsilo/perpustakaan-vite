import BodyFragment from "../Fragments/BodyFragment";
import FooterUser from "../Fragments/FooterUser";
import HeroFragment from "../Fragments/HeroFragment";
import Navigasi from "../Fragments/Navigasi";

const HomeLayouts = (props) => {
  const { children } = props;
  return (
    <div className="min-h-screen min-w-full">
      <Navigasi />
      <HeroFragment />
      <BodyFragment />
      <FooterUser />
    </div>
  );
};

export default HomeLayouts;
