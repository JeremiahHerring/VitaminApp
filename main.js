import { initialQuestions, specializedQuestionSets } from './questions.js'

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

// VITAMIN RECOMMENDATION SYSTEM
// If vitamin score for a specific vitamin is past a certain threshhold,
// the vitamin is recommended to the user
let vitaminAScore = 0;
let vitaminB1Score = 0;
let vitaminB2Score = 0;
let vitaminB3Score = 0;
let vitaminB5Score = 0;
let vitaminB6Score = 0;
let vitaminB9Score = 0;
let vitaminB12Score = 0;
let biotinScore = 0;
let vitaminCScore = 0;
let cholineScore = 0;
let vitaminDScore = 0;
let vitaminEScore = 0;
let vitaminKScore = 0;

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

// When continue button is clicked, initialize quizSection, remove popup and main,
// home page, and add quizBox. 
continueBtn.onclick = () => {

    const currentQuestion = questionCount;
    if (currentQuestion <= 5) {
        // Show inital questions for the first five questions
        showQuestionsFromSet(initialQuestions, currentQuestion);
    } else if (currentQuestion === 6) {
        // For the sixth question, veer off into specialized question set based on the category
        const selectedCategory = getSelectedCategory();
        const specializedSet = specializedQuestionSets[selectedCategory];

        // Pass the specializedSet to the showQuestions function
        showQuestionsFromSet(specializedSet, currentQuestion)
    }

    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    // Call to showQuestions function (starts at 0)
    showQuestions(0);
    // Call to question Counter (starts at 1)
    questionCounter(1);
}

let questionCount = 0;
let questionNumb = 1;
let isOptionSelected = false;

nextBtn.onclick = () => {
    if ((questionCount < questions.length - 1) && (isOptionSelected)) {
    questionCount++;
    showQuestions(questionCount);

    questionNumb ++;
    questionCounter(questionNumb)
    isOptionSelected = false;
    }
    else if (isOptionSelected) {
        showResults();
    }
};


// getting questions and options from array
function showQuestionsFromSet(questionSet, currentQuestion) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;
    
    let optionTag = '';

    // Loop through the options for the current question
    for (let i = 0; i < questions[index].options.length; i++) {
        optionTag += `<div class="option"><span>${questions[index].options[i]}</span></div>`;
    }

    optionList.innerHTML = optionTag;
    
    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

// Get what the option the user clicked on
function optionSelected(answer) {
    const allOptions = document.querySelectorAll('.option-list .option');
    allOptions.forEach(option => {
        option.classList.remove('active')
    })
    answer.classList.add('active');
    isOptionSelected = true;
    nextBtn.classList.add('active');
}

// Show what question the user is currently on
function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`
}

// Show results of questionnare
function showResults() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active')
}

tryAgainBtn.onclick = () => {
    quizBox.classList.add('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    showQuestions(questionCount);
    questionCounter(questionNumb);
}

goHomeBtn.onclick = () => {
    quizSection.classList.remove('active');
    nextBtn.classList.remove('active')
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    showQuestions(questionCount);
    questionCounter(questionNumb);
}

// Define an object that maps the user's choice to question sets
const categoryToQuestionSet = {
    "Health & Fitness": "healthAndFitness",
    Mood: "mood",
    Bones: "bones",
    // Add mappings for other categories
  };
  
  // Define a function to get the selected category from the 6th question
  function getSelectedCategory() {
    const sixthQuestionOptions = document.querySelectorAll('.option-list .option');
    for (let i = 0; i < sixthQuestionOptions.length; i++) {
      if (sixthQuestionOptions[i].classList.contains('active')) {
        return sixthQuestionOptions[i].textContent.trim();
      }
    }
    return null; // Return a default category or handle the case when no category is selected
  }
