import React from "react";
import "./nav.css";

export const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-wrapper">
        <div className="logo">
          <h1 className="heading">Edvora</h1>
        </div>

        <div className="user-info">
          <h4 className="heading">Dhruv Singh </h4>{" "}
          <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" className="user-avatar" alt="" />
        </div>
      </div>
    </nav>
  );
};
