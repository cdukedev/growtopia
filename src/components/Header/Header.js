import "./Header.scss";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import bell from "../../assets/bell.png";

function Header() {
  return (
    <>
      <div className="header">
        <Link to="/home" >
          <h2 className="header__title">Growtopia</h2>
        </Link>
      </div>
      <div className="header-icons">
        <image src={bell} className="icon"></image>
        <image src={avatar} className="avatar"></image>
      </div>
    </>
  );
}

export default Header;
