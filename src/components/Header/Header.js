import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/home">
        <h2 className="header__title">Growtopia</h2>
      </Link>
    </div>
  );
}

export default Header;
