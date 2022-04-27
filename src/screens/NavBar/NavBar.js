import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai/index";
import "./navbar.scss";
const NavBar = () => {
  return (
    <>
      <div className="visible-div">
        <div className="home-box">
          <h1>
            <Link to={`/`}>Home</Link>
          </h1>
        </div>
        <label htmlFor="toggle">
          <AiOutlineMenuFold className="menu-icon" />
        </label>
        <input type="checkbox" id="toggle" />
        <div className="nav-links-box">
          <Link to={`addtodo`}>Add Todo</Link>
          <Link to={`about`}>About Author</Link>
          <Link to={`testuploadimage`}>Test</Link>
          <Link to={`about`}>Test Images</Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
