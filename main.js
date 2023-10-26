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

let currentQuestionSet = initialQuestions;

function changeQuestionSet(newQuestionSet) {
    currentQuestionSet = newQuestionSet;
    questionCount = 0;
    questionNumb = 1;
    showQuestions(questionCount);
    questionCounter(questionNumb);
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

nextBtn.onclick = () => {
    if (isOptionSelected) {
        if (questionCount < currentQuestionSet.length - 1) {
            questionCount++;
            showQuestions(questionCount, currentQuestionSet);
            questionNumb++;
            questionCounter(questionNumb);
        } else {
            showResults();
        }
        isOptionSelected = false;
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
    const allOptions = document.querySelectorAll('.option-list .option');
    allOptions.forEach(option => {
        option.classList.remove('active');
    });
    answer.classList.add('active');
    isOptionSelected = true;
    nextBtn.classList.add('active');
}
// Show what question the user is currently on
function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${initialQuestions.length} Questions`
}

// Show results of questionnare
function showResults() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active')
}

tryAgainBtn.onclick = () => {
    // Reset to the initial question set
    currentQuestionSet = initialQuestions;

    // Reset the question count and number
    questionCount = 0;
    questionNumb = 1;

    // Display the first question
    showQuestions(questionCount, currentQuestionSet);

    // Update the question counter
    questionCounter(questionNumb);

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

