import { lifestyleQuestions, specializedQuestionSets } from "./JS/questions.js"
// import {giveRecommendation} from "./JS/recommendationsystem.js";
// DEFINING ALL OUR VARIABLES
const quizBox = document.querySelector('.quiz-box');
const nextBtn = document.querySelector('.next-btn');
const optionList = document.querySelector('.option-list');
const prevBtn = document.querySelector('.prev-btn');


prevBtn.classList.remove('active');

let currentQuestionSet = specializedQuestionSets.healthAndFitness; // Start with the Fitness question set
let userAnswers = [];

function changeQuestionSet(newQuestionSet) {
    currentQuestionSet = newQuestionSet;
    questionCount = 0;
    questionNumb = 1;
    showQuestions(questionCount);
}

let questionCount = 0;
let questionNumb = 1;
let isOptionSelected = false;
let questionTotal = 1

nextBtn.onclick = () => {
    if (isOptionSelected) {
        if (questionCount < currentQuestionSet.length - 1) {
            questionCount++;
            showQuestions(questionCount, currentQuestionSet);
            questionNumb++;
            questionTotal++;
            nextBtn.classList.remove('active');
            if (questionNumb >= 2) {
                prevBtn.classList.add('active');
            }
            quizBox.scrollTop = 0;
        } else {
            // Handle the case where there are no more questions in the set
            showResults();
        }
    
        isOptionSelected = false;
    };
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
            opt.addEventListener('click', (event) => optionSelected(event.target));
        });
    }
}


// Get what the option the user clicked on
function optionSelected(answer) {
    console.log("Option selected:", answer.textContent)
    const selectedOptionText = answer.textContent;
    userAnswers[questionTotal - 1] = selectedOptionText;

    // Remove 'active' class from all options
    const allOptions = document.querySelectorAll('.option-list .option');
    allOptions.forEach(option => {
        option.classList.remove('active');
    });

    // Add 'active' class to the selected option's parent (the div with class 'option')
    answer.parentNode.classList.add('active');

    // Log the class names of all options
    console.log("All option classes:", Array.from(allOptions).map(option => option.className));

    // Log the class names of the selected option's parent
    console.log("Selected option parent classes:", answer.parentNode.className);
    
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



// Define an object that maps the user's choice to question sets
const categoryToQuestionSet = {
    "Health & Fitness": specializedQuestionSets.healthAndFitness,
    "Brain": specializedQuestionSets.brain,
    "Energy": specializedQuestionSets.energy,
    "Digestion": specializedQuestionSets.digestion,
    "Hair, Skin & Nails": specializedQuestionSets.hairSkinNails,
    "Immunity": specializedQuestionSets.immunity,
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