document.addEventListener('DOMContentLoaded', function () {


const continueBtn = document.querySelector('.continue-btn');
const textBlocks = document.querySelectorAll(".text-block");
const questionnaireSection = document.querySelector('.questionnaire');
const beginningSection = document.querySelector('.beginning');
const form = document.querySelector('form');
const helloSection = document.querySelector('.hello');
const quizSection = document.querySelector('.quiz');
const userNameInput = document.querySelector('.question-name #user-name');
const userGreeting = document.querySelector('.hello #user-greeting');


let currentIndex = 0;

function toggleTextBlocks() {
    textBlocks[currentIndex].classList.remove('show');
    currentIndex = (currentIndex + 1) % textBlocks.length;
    textBlocks[currentIndex].classList.add('show');
}

setInterval(toggleTextBlocks, 5000);
textBlocks[currentIndex].classList.add('show');

continueBtn.onclick = () => {
   // Add the 'fade-out' class to trigger the fade-out animation
   beginningSection.classList.add('fade-out');

   // Listen for the end of the fade-out animation
   beginningSection.addEventListener('animationend', () => {
       // Hide the 'beginning' section
       beginningSection.style.display = 'none';

       // Show the 'questionnaire' section
       questionnaireSection.style.display = 'block';

       // Trigger the fade-in animation for the questionnaire section
       questionnaireSection.classList.add('fade-in');
   }, { once: true }); // Use 'once: true' to ensure the event listener is only called once
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the user's input
    const userName = userNameInput.value;

    // Store the user's name (you can use localStorage, sessionStorage, or a variable)
    localStorage.setItem('userName', userName);

    questionnaireSection.classList.add('fade-out');

    questionnaireSection.addEventListener('animationend', () => {
        questionnaireSection.style.display = 'none';
        helloSection.style.display = 'flex';
        helloSection.classList.add('fade-in');

         // Display the user's name in the "Hello there" section
         userGreeting.textContent = userName;

        setTimeout(() => {
            helloSection.style.display = 'none';
            quizSection.style.display = 'flex';
            quizSection.classList.add('fade-in');

            // Add a class to the body or header to enable the fixed position
            document.body.classList.add('fixed-header'); // or replace 'body' with your header element
        }, 3000);
    }, { once: true });
});

$(document).ready(function () {
    function fadeElements(fadeOutElement, fadeInElement) {
        $(fadeOutElement).fadeOut(500, function () {
            $(fadeInElement).fadeIn(500);
        });
    }

    function submitQuiz(ageGroup) {
        fadeElements('.quiz', '.thank-you-popup');

        setTimeout(function () {
            fadeElements('.thank-you-popup', '.dont-worry-popup');
        }, 2000);

        setTimeout(function () {
            fadeElements('.dont-worry-popup', '.basics');
        }, 4000);
    }

    $('.response-box-1').on('click', function () {
        var ageGroup = $(this).find('p').text().trim();
        submitQuiz(ageGroup);
    });

    $(".next-question").click(function () {
        $(".basics").animate({ left: "-100%" }, 500, function () {
            $(this).hide();
            $(".questions").show().animate({ left: "0" }, 500);
        });
    });
})

// Attach click event to response-box elements in question #2
$(".response-box").one("click", function () {
    var nextQuestionId = $(this).data("next-question");

    // Mark the current question as answered
    $(this).parents(".question").addClass("answered");

    // Fade out all questions except the current one
    $(".questions .question:not(#" + nextQuestionId + ")").fadeOut(500);

    // Delay the fading in of the next question until after the current question has faded out
    setTimeout(function () {
        $("#" + nextQuestionId).fadeIn(500);
    }, 500);
});

// Define variables for question elements
const question3 = $("#question-3");
const question4 = $("#question-4");
const goalsSection = $(".goals");

// Function to handle fading after answering a question
function answerQuestion(questionElement, nextQuestionElement) {
    // Mark the current question as answered
    questionElement.addClass("answered");

    // Fade out the current question
    questionElement.fadeOut(500);

    // Fade in the next question after a delay
    setTimeout(function () {
        nextQuestionElement.fadeIn(500);
    }, 500);
}

// Attach a click event to radio inputs in question #3
$("#question-3 .radio-item input[type='radio']").one("click", function () {
    answerQuestion(question3, question4);
});

// Attach a click event to radio inputs in question #4
$("#question-4 .radio-item input[type='radio']").one("click", function () {
    // Mark question 4 as answered
    question4.addClass("answered");

    // Fade out question 4
    question4.fadeOut(500);

    // Fade in the goals section after a delay
    setTimeout(function () {
        goalsSection.fadeIn(500);
    }, 500);
});

$(".next-question-goals").one("click", function () {
    // Fade out the goals section
    goalsSection.fadeOut(500);

    // Show the "choose-goals" section after a delay
    setTimeout(function () {
        $(".choose-goals").fadeIn(500);
    }, 500);
});

});

$(".cont-btn").on("click", function () {
    // Check if at least one checkbox is checked
    if ($('.choose-goals input[type="checkbox"]:checked').length > 0) {
        // Fade out the current section (choose-goals)
        $(".choose-goals").fadeOut(500, function () {
            // Fade in the main section after the current section has faded out
            $(".main").fadeIn(500);
        });
    } else {
        // If no checkbox is checked, you can show an alert or handle it as needed
        alert("Please select at least one goal before continuing.");
    }
});

// ... (your existing code)









