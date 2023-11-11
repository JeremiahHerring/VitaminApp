const startBtns = document.querySelectorAll('.start-btn');
const header = document.querySelector(".header"); 
const navbarLinks = document.querySelectorAll('.navbar-link');
const homeLink = document.getElementById('home-link');
const howItWorksLink = document.getElementById('how-it-works-link');
const aboutUsLink = document.getElementById('about-us-link');
const contactLink = document.getElementById('contact-link');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

// Function to detect scroll direction
window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
;
});


homeLink.onclick = () => {
    setActive(homeLink);
} 
howItWorksLink.onclick = () => {
    setActive(howItWorksLink);
}
aboutUsLink.onclick = () => {
    setActive(aboutUsLink);
}
contactLink.onclick = () => {
    setActive(contactLink);
}

// Function to set active class on the correct navigation link
function setActive(link) {
    // Remove 'active' class from all links
    navbarLinks.forEach(navLink => navLink.classList.remove('active'));

    // Add 'active' class to the specified link
    link.classList.add('active');
}


startBtns.forEach(startBtn => {
    startBtn.onclick = () => {
        window.location.href = 'quiz.html';
    }
});

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });







