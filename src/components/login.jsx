import React from "react";

const Login = () => {
  return (
    <div className="page_content-wrapper">
      <div className="page-content">
        <div className="page_content-wrapper">
          <div className="login-wrapper">
            <div className="login">
              <form action="" method="post">
                <h2>Авторизация</h2>
                <label htmlFor="login">Email</label>
                <input type="email" id="login" name="login" required />

                <label htmlFor="password">Пароль:</label>
                <input type="password" id="password" name="password" required />

                <a href="">Регистрация</a>
                <button type="submit">Войти</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
