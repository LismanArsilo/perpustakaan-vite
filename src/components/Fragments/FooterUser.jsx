import { Link } from "react-router-dom";

const FooterUser = () => {
  return (
    <div className="">
      <p>Ini Footer</p>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default FooterUser;
