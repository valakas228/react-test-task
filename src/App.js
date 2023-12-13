import React, { memo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import Login from "./components/login";
import Store from "./components/store";
import Error from "./components/error";
import "./styles/styles.css";
import "./styles/media.css";

const navData = {
  nav: [
    { link: "/", text: "Главная" },
    { link: "/media", text: "Медиа" },
    { link: "/store", text: "Каталог" },
    { link: "/login", text: "Войти" },
  ],
};

const App = () => {
  return (
    <Router>
      <div>
        <header id="header">
          {" "}
          <Header data={navData} />
        </header>

        <main id="main">
          <div className="wrapper">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/store" element={<Store />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </main>

        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
};

export default memo(App);
