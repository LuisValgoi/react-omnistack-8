import React from 'react';
import logo from "../assets/logo.svg";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <form>
        <img src={logo} alt="tindev" />
        <input type="text" placeholder="Digite seu usuário no Github"></input>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Login;
