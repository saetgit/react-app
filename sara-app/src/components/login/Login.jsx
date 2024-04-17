import { useContext } from "react";
import { AppContext } from "../../App";
import Input from "../Input/Input";
import styled from "./login.module.css";

function Login() {
  const { setIsLogin } = useContext(AppContext);

  return (
    <div>
      <h1>ورود</h1>
      <div className={styled.Login}>
        <Input label="نام کاربری" name="title" type="text" />
        <Input label=" رمز عبور" name="title" type="text" />
        <button onClick={() => setIsLogin(true)}>ورود</button>
      </div>
    </div>
  );
}

export default Login;
