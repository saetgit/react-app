import styled from "./navbar.module.css";
function Navbar(props) {
  return (
    <div className={styled.headerWrapper}>
      <div className="container">
        <div className={styled.header}>
          <h3>{props.title}</h3>
          <ul>
            <li>لیست مقاله</li>
            <li>مقاله جدید</li>
            <li>درباره ما</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
