import React, { memo } from "react";
import MyForm from "./components/form";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import Login from "./components/login";
import "./styles/styles.css";
import "./styles/media.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const navData = {
  nav: [
    { link: "", text: "Главная" },
    { link: "nav2", text: "Медиа" },
    { link: "nav3", text: "Каталог" },
    { link: "login", text: "Войти" },
  ],
};

function App() {
  return (
    <>
      <main id="main">
        <div className="wrapper">
          <header id="header">
            <Header data={navData} />
          </header>
          <Router>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
          <div className="myform">
            <MyForm />
          </div>
        </div>
      </main>
      <>
        <Faq />
      </>
      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
}

export default memo(App);
