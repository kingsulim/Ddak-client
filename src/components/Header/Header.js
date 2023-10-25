import { Link } from "react-router-dom";
import "./Header.scss";
function Header() {
  return (
    <>
      <header>
        <div className="header">
          <div className="logo">
            <Link to="/">
              딱 걸렸누
              <img src="/images/logo.svg" className="header-logo"/>
            </Link>
          </div>
          <div className="header-category-tit">
            <ul className="header-category-ul">
              <li>
                <Link to="">요청 생성</Link>
              </li>
              <li>
                <Link to="">요청 관리</Link>
              </li>
              <li>
                <Link to="">학생 관리</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
