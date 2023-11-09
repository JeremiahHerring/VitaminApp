const startBtn = document.querySelector('.start-btn');
const header = document.querySelector(".header");


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









