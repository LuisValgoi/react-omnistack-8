import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import "./Main.css";
import logo from "../assets/logo.svg";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";
import api from "../services/api";

function Main({match}) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async function loadUser() {
      const response = await api.get("/devs/available", {
        headers: { user: match.params.id }
      });
      
      setUsers(response.data);
    })();
  }, [match.params.id]);

  async function handleLike(id){
    await api.post(`/devs/${id}/likes`, null, {
      headers: { user: match.params.id }
    });
    // filter
    setUsers(users.filter(user => user._id !== id));
  }

  async function handleDislike(id){
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: { user: match.params.id }
    });
    // filter
    setUsers(users.filter(user => user._id !== id));
  }

  return (
    <div className="main-container">
      <Link to="/">
        <img src={logo} alt="Tindev"></img>
      </Link>
        { users.length > 0 ? (
          <ul>
            {users.map(user => (
              <li key={user._id}>
                <img className="avatar" src={user.avatar} alt=""></img>
                <footer>
                  <strong>{user.name}</strong>
                  <p>{user.bio}</p>
                </footer>
                <div className="buttons">
                  <button type="button" onClick={() => handleLike(user._id)}>
                    <img src={like} alt="Like"></img>
                  </button>
                  <button type="button" onClick={() => handleDislike(user._id)}>
                    <img src={dislike} alt="Dislike"></img>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="empty">Acabou :(</div>
        ) }
    </div>
  );
}

export default Main;
