import React, { useState } from 'react';
import "./Login.css";

import logo from "../assets/logo.svg";
import api from "../services/api";

function Login({history}) {
  const [username, setUserName] = useState("");

  async function handleSubmit (e) {
    e.preventDefault(); //prevent redirecting - default behavior

    const response = await api.post("/devs", {
      username
    });

    const { _id } = response.data;

    history.push(`/dev/${_id}`)
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="tindev" />
        <input 
          type="text" 
          placeholder="Digite seu usuário no Github" 
          value={username}
          onChange={e => setUserName(e.target.value)}></input>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Login;
