import styled from "./navbar.module.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className={styled.headerWrapper}>
      <div className="container">
        <div className={styled.header}>
          <h3>{props.title}</h3>
          <ul>
            <li>
              <Link to="/">لیست مقاله</Link>
            </li>
            <li> <Link to="/article">مقاله جدید</Link></li>
            <li>
              <Link to="/about">درباره ما</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
