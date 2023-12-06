document.addEventListener("DOMContentLoaded", function () {
  const faqList = document.querySelector(".faq__list");

  if (faqList) {
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
  } else {
    console.error("Element with class '.faq__list' not found.");
  }
});
