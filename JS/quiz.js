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

$(".radio-item input[type='radio']").one("click", function () {
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

























