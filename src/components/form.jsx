import React, { useState } from "react";

const MyForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    tel: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("formData", JSON.stringify(formData));

    setTimeout(() => {
      localStorage.removeItem("formData");
      console.log("Form data cleared from localStorage.");
    }, 60000);

    console.log("Form submitted:", formData);
  };

  return (
    <div className="form-background">
      <div className="form-content">
        <div className="form-wrapper">
          <h1>Поможем в выборе!</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              id="name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Введите ваше имя"
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Введите ваш email"
            />

            <label htmlFor="tel">Телефон</label>
            <input
              type="tel"
              id="tel"
              name="tel"
              value={formData.tel}
              onChange={handleChange}
              placeholder="Введите ваш телефон"
            />
            <div>

              <input type="checkbox" name="agree" required />
              <label htmlFor="agree">Я принимаю условия обработки данных</label>
            </div>

            <button type="submit">Отправить</button>
          </form>
        </div>
        <div className="form-info-wrapper">
          <div className="form-info">
            {/* Можете добавить информацию о статусе отправки или ошибке здесь */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
