const startBtn = document.querySelector('.start-btn');
const header = document.querySelector(".header");

// When start button is clicked, initialize popupInfo and blur the background
startBtn.onclick = () => {
  // Insert relevant code here
}

window.onscroll = function() {
    const scrollY = window.scrollY;

    if (scrollY > 0) { // Adjust this value to the desired scroll position
        header.classList.add("active");
        console.log("Header added the 'active' class");
    } else {
        header.classList.remove("active");
        console.log("Header removed the 'active' class");
    }
};





