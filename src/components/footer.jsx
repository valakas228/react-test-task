import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer__wrapper">
        <div className="footer__item">
          <h3 className="footer__heading">О BrainlyAcademy</h3>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="tel:+78005553535">8800553535</a>
            </li>
            <li className="footer__list-item">
              <a href="">Служба поддержки</a>
            </li>
            <li className="footer__list-item">
              <a href="">О нас</a>
            </li>
            <li className="footer__list-item">
              <a href="">Отзывы</a>
            </li>
          </ul>
        </div>
        <div className="footer__item">
          <h3 className="footer__heading">Направления</h3>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="tel:+78005553535">Программирование</a>
            </li>
            <li className="footer__list-item">
              <a href="">Аналитика</a>
            </li>
            <li className="footer__list-item">
              <a href="">ГеймДев</a>
            </li>
            <li className="footer__list-item">
              <a href="">Дизайн</a>
            </li>
            <li className="footer__list-item">
              <a href="">Маркетинг</a>
            </li>
          </ul>
        </div>
        <div className="footer__item">
          <h3 className="footer__heading">Сотрудничество</h3>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="tel:+78005553535">Скидки</a>
            </li>
            <li className="footer__list-item">
              <a href="tel:+78005553535">Компаниям</a>
            </li>
            <li className="footer__list-item">
              <a href="tel:+78005553535">Работодателям</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
