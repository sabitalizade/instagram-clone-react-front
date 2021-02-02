import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (

    <div className="main">
    <div className="container">
    <div className="navBar ">
      <div className="logo">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Innstagram"
        />
      </div>
      <div className="search">
        <input type="text" />
      </div>
      <div className="notfication">
        <ul>
          <li>
            <Link to="/">
              <img src="./icons/home.svg" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/direct/inbox">
              <img src="./icons/direct.svg" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/explore">
              <img src="./icons/explore.svg" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/account/activity">
              <img src="./icons/like.svg" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/account">
              <img width="22px" src="https://instagram.fvdc8-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fvdc8-1.fna.fbcdn.net&_nc_ohc=tV0P-ansAXgAX94cbWr&oh=0d04f07b5ec8d22a2854550dcc71f062&oe=6044370F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2" alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
    </div>
    </div>
  );
};

export default NavBar;
