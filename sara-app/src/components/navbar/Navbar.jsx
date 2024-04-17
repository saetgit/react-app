import { useContext } from "react";
import styled from "./navbar.module.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

function Navbar(props) {
  const {isLogin, setIsLogin } = useContext(AppContext);
  return (
    <div className={styled.headerWrapper}>
      <div className="container">
        <div className={styled.header}>
          <h3>{props.title}</h3>
          <ul>
            <li>
              <Link to="/">لیست مقاله</Link>
            </li>
            <li>
              {" "}
              <Link to="/createArticle">مقاله جدید</Link>
            </li>
            <li>
              <Link to="/about">درباره ما</Link>
            </li>
            <li>
              {isLogin ? (
                <span onClick={() => setIsLogin(false)}> خروج</span>
              ) : (
                <span> ورود</span>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
