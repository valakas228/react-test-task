const animatedElements = document.querySelectorAll('.more-btn');

function checkScroll() {
  animatedElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    if (elementTop < window.innerHeight && elementBottom > 0) {
      element.classList.add('animate');
    } else {
      element.classList.remove('animate');
    }
  });
}

window.addEventListener('scroll', checkScroll);
