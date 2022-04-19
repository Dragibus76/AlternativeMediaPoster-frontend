import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
  const handleClick = () => {
    window.open("http://0.0.0.0:8055");
  };

  return (
    <div className="header">
      <nav>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/coup-de-coeur"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Coup de coeur</li>
          </NavLink>
          <NavLink
            to="/coup-de-coeur"
            className="test"
          >
            <i class="fa-solid fa-user-secret" onClick={handleClick}></i>
          </NavLink>
          
        </ul>
      </nav>
      <h1>Dragi Alternative Poster</h1>
    </div>
  );
};

export default Header;
