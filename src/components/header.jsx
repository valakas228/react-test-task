import React from "react";
import logo from "../imgs/logo.jpg";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <div>
      <nav>
        <div className="logo">
          <a href="index.html">
            <img src={logo} width="50px" />
          </a>
        </div>
        <Nav nav={props.data.nav} />
      </nav>
    </div>
  );
};

const Nav = (props) => {
  let data = props.nav;
  const listItem = data.map((item) => (
    <li key={item.link}>
      <Link to={item.link}>{item.text}</Link>
    </li>
  ));

  return (
    <>
      <ul className="menu">{listItem}</ul>
      <div id="mobile-menu">
        <div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav className="nav">
          <ul>{listItem}</ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
