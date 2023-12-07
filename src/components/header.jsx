import React from "react";
import logo from "../imgs/logo.jpg";

const Header = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <a href="index.html">
            <img src={logo} width="50px" />
          </a>
        </div>
        <ul className="menu">
          <li>
            <a href="index.html">О нас</a>
          </li>
          <li>
            <a href="#">Медиа</a>
          </li>
          <li>
            <a href="store.php">Каталог</a>
          </li>
          <li>
            <a href="login.php">Войти</a>
          </li>
        </ul>
        <div id="mobile-menu">
          <div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <a href="#">О нас</a>
              </li>
              <li>
                <a href="#">Медиа</a>
              </li>
              <li>
                <a href="#">Каталог</a>
              </li>
              <li>
                <a href="#">Войти</a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
      <div></div>
    </div>
  );
};

export default Header;
