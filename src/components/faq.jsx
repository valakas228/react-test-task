import React, { useEffect } from "react";

const Faq = () => {
  useEffect(() => {
    const faqList = document.querySelector(".faq__list");
    const faqQuestions = faqList.querySelectorAll(".faq__question");

    faqQuestions.forEach((question) => {
      question.addEventListener("click", () => {
        question.classList.toggle("active");
        const answer = question.nextElementSibling;
        if (answer.style.maxHeight) {
          answer.style.maxHeight = null;
        } else {
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });

    return () => {
      faqQuestions.forEach((question) => {
        question.removeEventListener("click");
      });
    };
  }, []);

  return (
    <div className="faq-background">
      <div className="faq-wrapper">
        <div className="faq">
          <h2>Часто задаваемые вопросы</h2>
          <div className="faq-content">
            <ul className="faq__list">
              <li>
                <h3 className="faq__question">
                  Как связаться с нашей службой поддержки?
                </h3>
                <div className="faq__answer">
                  <p>
                    Вы можете связаться с нашей службой поддержки по телефону,
                    электронной почте или через форму обратной связи на нашем
                    сайте.
                  </p>
                </div>
              </li>
              <li>
                <h3 className="faq__question">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minus, sint.
                </h3>
                <div className="faq__answer">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Minus, sint..
                  </p>
                </div>
              </li>
              <li>
                <h3 className="faq__question">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minus, sint.
                </h3>
                <div className="faq__answer">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Minus, sint.
                  </p>
                </div>
              </li>
              <li>
                <h3 className="faq__question">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minus, sint.
                </h3>
                <div className="faq__answer">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Minus, sint.
                  </p>
                </div>
              </li>
              <li>
                <h3 className="faq__question">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minus, sint.
                </h3>
                <div className="faq__answer">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Minus, sint.
                  </p>
                </div>
              </li>
              <li>
                <h3 className="faq__question">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minus, sint.
                </h3>
                <div className="faq__answer">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Minus, sint.
                  </p>
                </div>
              </li>
              <li>
                <h3 className="faq__question">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minus, sint.
                </h3>
                <div className="faq__answer">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Minus, sint.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
