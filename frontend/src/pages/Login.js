import React, { useState } from 'react';
import logo from "../assets/logo.svg";
import "./Login.css";

function Login() {
  const [userName, setUserName] = useState("");

  function handleSubmit (e) {
    e.preventDefault(); //prevent redirecting - default behavior
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="tindev" />
        <input 
          type="text" 
          placeholder="Digite seu usuário no Github" 
          value={userName}
          onChange={e => setUserName(e.target.value)}></input>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Login;
