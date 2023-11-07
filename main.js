import { initialQuestions, specializedQuestionSets } from './questions.js'
import {giveRecommendation} from "./recommendationsystem.js";
// DEFINING ALL OUR VARIABLES
const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn')
const quizSection = document.querySelector('.quiz-section')
const quizBox = document.querySelector('.quiz-box')
const nextBtn = document.querySelector('.next-btn');
const optionList = document.querySelector('.option-list');
const resultBox = document.querySelector('.result-box')
const tryAgainBtn = document.querySelector('.tryAgain-btn')
const goHomeBtn = document.querySelector('.goHome-btn')

prevBtn.classList.remove('active');

// When start button is clicked initialize popupInfo and blur the background
startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

// When exit button is clicked exit out of popupInfo and unblur the backgorund
exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

let currentQuestionSet = initialQuestions;
let userAnswers = [];
function changeQuestionSet(newQuestionSet) {
    currentQuestionSet = newQuestionSet;
    questionCount = 0;
    questionNumb = 1;
    showQuestions(questionCount);
}
// When continue button is clicked, initialize quizSection, remove popup and main,
// home page, and add quizBox. 
continueBtn.onclick = () => {

    const currentQuestion = questionCount;
    if (currentQuestion <= 5) {
        currentQuestionSet = initialQuestions;
        showQuestionsFromSet(currentQuestion);
    } else if (currentQuestion === 6) {
        // For the sixth question, veer off into specialized question set based on the category
        const selectedCategory = getSelectedCategory();
        changeQuestionSet(specializedQuestionSets[selectedCategory])
        showQuestionsFromSet(currentQuestion);        
    }

    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
}

let questionCount = 0;
let questionNumb = 1;
let isOptionSelected = false;
let questionTotal = 1
nextBtn.onclick = () => {
    if (isOptionSelected) {
        if (questionCount < currentQuestionSet.length - 1) {
            // Advance to the next question in the current set
            questionCount++;

            if (questionCount == 1) {
            // Add the 'animate' class to trigger the animation
            quizBox.classList.add('animate');
            }  else if (questionCount == 2) {
                quizBox.classList.add('animate1')
            }

            showQuestions(questionCount, currentQuestionSet);
            questionNumb++;
            questionTotal++;
            nextBtn.classList.remove('active');
            if (questionNumb >= 2) {
                prevBtn.classList.add('active');
            }
            quizBox.scrollTop = 0;

            // Remove the 'animate' class after the animation completes
            setTimeout(() => {
                quizBox.classList.remove('animate');
            }, 650); // Adjust the duration (0.65s) + a little buffer for timing
        } else if (questionCount === 5) {
            getSelectedCategory();

            if (selectedCategory && categoryToQuestionSet[selectedCategory]) {
                currentQuestionSet = categoryToQuestionSet[selectedCategory];
                questionCount = 0;
                questionTotal++;
                showQuestions(questionCount, currentQuestionSet);
                questionNumb = 1;
                nextBtn.classList.remove('active');
                prevBtn.classList.remove('active'); // Deactivate prevBtn when returning to category questions
                quizBox.scrollTop = 0;
            }
        } else {
            showResults();
        }
        isOptionSelected = false;
    }
};

prevBtn.onclick = () => {
    if (questionCount > 0) {
        // Go back to the previous question in the current set
        questionCount--;
        showQuestions(questionCount, currentQuestionSet);
        questionNumb--;
        questionTotal--;
        // Check if you're now on the first question to deactivate the prevBtn
        if (questionNumb <= 1) {
            prevBtn.classList.remove('active');
        }
    }
};

// Define a function to show questions from a given set
function showQuestionsFromSet(index) {
    if (index < currentQuestionSet.length) {
        showQuestions(index, currentQuestionSet);
    } else {
        // Handle the case where there are no more questions in the set
        // You can display a message or take some other action
    }
}

// Define a function to display questions based on the index and question set
function showQuestions(index, questionSet) {
    if (questionSet && index >= 0 && index < questionSet.length) {
        const questionText = document.querySelector('.question-text');
        questionText.textContent = `${questionSet[index].numb}. ${questionSet[index].question}`;

        let optionTag = '';
        for (let i = 0; i < questionSet[index].options.length; i++) {
            optionTag += `<div class="option" data-index="${i}"><span>${questionSet[index].options[i]}</span></div>`;
        }

        optionList.innerHTML = optionTag;

        const option = document.querySelectorAll('.option');
        option.forEach((opt, i) => {
            opt.addEventListener('click', () => optionSelected(opt));
        });
    }
}


// Get what the option the user clicked on
function optionSelected(answer) {
    const selectedOptionText = answer.textContent; // Get the text content of the selected option
    // Store the user's choice in the userAnswers array
    userAnswers[questionTotal - 1] = selectedOptionText;
    console.log(userAnswers);
    const allOptions = document.querySelectorAll('.option-list .option');
    allOptions.forEach(option => {
        option.classList.remove('active');
    });
    answer.classList.add('active');
    isOptionSelected = true;
    nextBtn.classList.add('active');
}

function showRecommendations() {

    giveRecommendation(userAnswers);
}
// Show results of questionnare
function showResults() {
    showRecommendations();
    quizBox.classList.remove('active');
    resultBox.classList.add('active')
    questionTotal = 1; // Need to reset incase user wants to do another run
    userAnswers = []; // ^
}

tryAgainBtn.onclick = () => {
    // Reset to the initial question set
    currentQuestionSet = initialQuestions;

    // Reset the question count and number
    questionCount = 0;
    questionNumb = 1;

    // Display the first question
    showQuestions(questionCount, currentQuestionSet);

    // Hide the result box
    resultBox.classList.remove('active');

    // Show the quiz box
    quizBox.classList.add('active');
}

goHomeBtn.onclick = () => {
    quizSection.classList.remove('active');
    nextBtn.classList.remove('active')
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    
    showQuestions(questionCount);
}

// Define an object that maps the user's choice to question sets
const categoryToQuestionSet = {
    "Health & Fitness": specializedQuestionSets.healthAndFitness,
    "Mood": specializedQuestionSets.mood,
    "Bones": specializedQuestionSets.bones,
    "Cognitive Health": specializedQuestionSets.cognitiveHealth,
    "Energy": specializedQuestionSets.energy,
    "Sleep": specializedQuestionSets.sleep,
    "Digestion": specializedQuestionSets.digestion,
    "Hair, Skin & Nails": specializedQuestionSets.hairSkinNails,
    "Immunity": specializedQuestionSets.immunity,
    "Organs": specializedQuestionSets.organs,
    "Joints": specializedQuestionSets.joints
    // Add mappings for other categories
};
  
let selectedCategory = null;
// Add this function to get the selected category
function getSelectedCategory() {
    const selectedOption = document.querySelector('.option.active');
    if (selectedOption) {
        selectedCategory = selectedOption.textContent;
    }
}




