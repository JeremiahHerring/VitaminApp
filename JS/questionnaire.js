import { lifestyleQuestions, specializedQuestionSets } from './questions.js'
// DEFINING ALL OUR VARIABLES
const main = document.querySelector('.main');
const quizSection = document.querySelector('.quiz-section')
const quizBox = document.querySelector('.quiz-box')
const nextBtn = document.querySelector('.next-btn');
const optionList = document.querySelector('.option-list');
const resultBox = document.querySelector('.result-box')
const prevBtn = document.querySelector('.prev-btn')

prevBtn.classList.remove('active');
let currentQuestionSet = specializedQuestionSets.healthAndFitness;



function initializeQuiz(initialSetName) {
    let currentQuestion = 0;
    // Convert the initialSetName to lowercase
    currentQuestionSet = specializedQuestionSets[initialSetName.toLowerCase()];
    showQuestionsFromSet(currentQuestion);

    // Set the content of the h1 element to the name of the current question set
    updateQuizTitle(initialSetName);

    quizSection.classList.add('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
}

// Call the initialization function with the initial question set
initializeQuiz('Fitness'); 

function updateQuizTitle(setName) {
    const quizTitle = document.querySelector('.quiz-box h1');
    quizTitle.textContent = setName;
}


// When you change the question set, call the updateQuizTitle function
// Example: changeQuestionSet('energy');
function changeQuestionSet(newSetName) {
    console.log('newSetName:', newSetName);
    console.log('specializedQuestionSets:', specializedQuestionSets);
    currentQuestionSet = specializedQuestionSets[newSetName.toLowerCase()]; // Convert to lowercase
    console.log('currentQuestionSet:', currentQuestionSet);
    questionCount = 0;
    questionNumb = 1;
    showQuestions(questionCount, currentQuestionSet);
    updateQuizTitle(newSetName);
}

let userAnswers = [];

let questionCount = 0;
let questionNumb = 1;
let isOptionSelected = false;
let questionTotal = 1
nextBtn.onclick = () => {
    if (isOptionSelected) {
        if (questionCount < currentQuestionSet.length - 1) {
            // Advance to the next question in the current set
            questionCount++;


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


// Define an object that maps the user's choice to question sets
const categoryToQuestionSet = {
    "Fitness": specializedQuestionSets.fitness,
    "Brain": specializedQuestionSets.brain,
    "Energy": specializedQuestionSets.energy,
    "Digestion": specializedQuestionSets.digestion,
    "Hair, Skin & Nails": specializedQuestionSets.hairSkinNails,
    "Immunity": specializedQuestionSets.immunity,
};
  
let selectedCategory = null;
// Add this function to get the selected category
function getSelectedCategory() {
    const selectedOption = document.querySelector('.option.active');
    if (selectedOption) {
        selectedCategory = selectedOption.textContent;
    }
}