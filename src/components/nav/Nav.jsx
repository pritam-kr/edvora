import React from "react";
import { useRidesContext } from "../../context/ridesContext";
import "./nav.css";
 

export const Nav = () => {

  const {state : {userInfo}} = useRidesContext() || {}

  return (
    <nav className="nav">
      <div className="nav-wrapper max-width">
        <div className="logo">
          <h1 className="heading">Edvora</h1>
        </div>

        <div className="user-info">
          <h4 className="heading"> {userInfo.name}</h4>{" "}
          <img src={userInfo.url} className="user-avatar" alt="" />
        </div>
      </div>
    </nav>
  );
};
