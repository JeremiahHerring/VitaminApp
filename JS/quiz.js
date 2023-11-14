import { initialQuestions, specializedQuestionSets } from './questions.js'
import {giveRecommendation} from "./recommendationSystem.js";

const continueBtn = document.querySelector('.continue-btn');
const textBlocks = document.querySelectorAll(".text-block");
const question = document.querySelector(".question")
const questionnaireSection = document.querySelector('.questionnaire')
const beginningSection = document.querySelector('.beginning')
const form = document.querySelector('form')
const helloSection = document.querySelector('.hello')
const quizSection = document.querySelector('.quiz')
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

    questionnaireSection.classList.add('fade-out');

    questionnaireSection.addEventListener('animationend', () => {
        questionnaireSection.style.display = 'none';
        helloSection.style.display = 'flex';
        helloSection.classList.add('fade-in');

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
    // Function to handle fading in/out elements
    function fadeElements(fadeOutElement, fadeInElement) {
        $(fadeOutElement).fadeOut(500, function () {
            // Callback function after fadeOut completes
            $(fadeInElement).fadeIn(500);
        });
    }

    // Function to handle the quiz submission
    function submitQuiz(ageGroup) {
        // Assuming ageGroup is the selected age group (e.g., '0-17', '18-55', '55+')

        // Fade out quiz-section and fade in thank-you-popup
        fadeElements('.quiz', '.thank-you-popup');

        // After a delay, fade out thank-you-popup and fade in dont-worry-popup
        setTimeout(function () {
            fadeElements('.thank-you-popup', '.dont-worry-popup');
        }, 2000); // Adjust the delay time (in milliseconds) as needed

        // After another delay, fade out dont-worry-popup and fade in basics section
        setTimeout(function () {
            fadeElements('.dont-worry-popup', '.basics');
        }, 4000); // Adjust the delay time (in milliseconds) as needed
    }

    // Attach click event to age-response-box elements
    $('.response-box').on('click', function () {
        // Get the age group from the clicked box
        var ageGroup = $(this).find('p').text().trim();

        // Submit the quiz with the selected age group
        submitQuiz(ageGroup);
    });
});

$(document).ready(function () {
    $(".next-question").click(function () {
        $(".basics").animate({left: "-100%"}, 500, function () {
            $(this).hide();
            $(".questions").show().animate({left: "0"}, 500);
        });
    });
});

$(document).ready(function () {
    // Set the initial question to display
    var currentQuestion = 2;

    // Show the first question
    $('.questions .question').hide();
    $('.questions #question-' + currentQuestion).show();

    // Handle the click event for the answer circles
    $('.answer-circle').click(function () {
        var nextQuestion = $(this).data('next-question');

        // Hide the current question
        $('.questions .question').hide();

        // Show the next question based on the user's response
        if (nextQuestion !== '') {
            // If there's a next question, show it
            $('.questions #' + nextQuestion).show();
            currentQuestion = parseInt(nextQuestion.split('-')[1]); // Update the current question
        } else {
            // Otherwise, proceed to the next sequential question
            currentQuestion++;

            if (currentQuestion === 3) {
                var answer = $(this).text().trim().toLowerCase();
                if (answer === 'no') {
                    currentQuestion++; // Skip question 3
                }
            }

            $('.questions #question-' + currentQuestion).show();
        }

        // Hide the popups after question 3
        if (currentQuestion === 3) {
            $('.thank-you-popup, .dont-worry-popup').hide();
        }
    });
});








