import { lifestyleQuestions, specializedQuestionSets } from './questions.js';

// DEFINING ALL OUR VARIABLES
const main = document.querySelector('.main');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const nextBtn = document.querySelector('.next-btn');
const optionList = document.querySelector('.option-list');
const resultBox = document.querySelector('.result-box');
const prevBtn = document.querySelector('.prev-btn');

prevBtn.classList.remove('active');
let currentQuestionSet = specializedQuestionSets.healthAndFitness;

let selectedGoals = [];

$(".cont-btn").on("click", function () {
    selectedGoals = [];
    // Check which goals are selected
    $('.choose-goals input[type="checkbox"]:checked').each(function () {
        selectedGoals.push(this.name.toLowerCase());
    });

    // Check if at least one goal is selected
    if (selectedGoals.length > 0) {
        // Display questions based on selected goals
        iterateThroughGoals(selectedGoals);
    } else {
        // If no checkbox is checked, you can show an alert or handle it as needed
        alert("Please select at least one goal before continuing.");
    }
});

function iterateThroughGoals(goals) {
    let currentGoalIndex = 0;

    function displayNextGoal() {
        // Check if there are more goals to display
        if (currentGoalIndex < goals.length) {
            const currentGoal = goals[currentGoalIndex];
            initializeQuiz(currentGoal);
            currentGoalIndex++;
            questionCount = 0;
            questionNumb = 1;
            
        } else {
            // No more goals, show results or handle as needed
            transitionToLifeStyle();
        }
    }

    // Display the first goal
    displayNextGoal();

    // Update the nextBtn click event to progress through goals
    nextBtn.onclick = () => {
        if (isOptionSelected) {
            if (currentQuestionSet && questionCount < currentQuestionSet.length - 1) {
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
            } else {
                // Move to the next goal if available
                displayNextGoal();
            }
        }
    };
}
        

// Function to initialize the quiz with the selected goal
function initializeQuiz(initialGoal) {
    let currentQuestion = 0;

    // Handle the special case for "Hair, Skin & Nails" with case-insensitive matching
    if (initialGoal.toLowerCase() === "hair, skin & nails") {
        currentQuestionSet = specializedQuestionSets.hairSkinNails;
    } else {
        // Convert the initial goal to lowercase and get the question set
        currentQuestionSet = specializedQuestionSets[initialGoal.toLowerCase()];
    }

    // Check if the category is not found in the mapping (e.g., if the mapping is undefined)
    if (!currentQuestionSet) {
        console.error(`Question set not found for category: ${initialGoal}`);
        // You may want to handle this case, such as showing an error message
        return;
    }

    showQuestionsFromSet(currentQuestion);

    // Set the content of the h1 element to the name of the current question set
    updateQuizTitle(initialGoal);

    quizSection.classList.add('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
}

function updateQuizTitle(setName) {
    const quizTitle = document.querySelector('.quiz-box h1');
    quizTitle.textContent = setName;
}


// When you change the question set, call the updateQuizTitle function
// Example: changeQuestionSet('energy');
function changeQuestionSet(newSetName) {
    currentQuestionSet = specializedQuestionSets[newSetName]; // Convert to lowercase
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

// Show results of questionnare
function transitionToLifeStyle() {
    // Fade out the quiz section
    $(".main").fadeOut(500, function () {
        // Show the "lifestyle" section after the current section has faded out
        $(".lifestyle").fadeIn(500);
    });
}

// Define an object that maps the user's choice to question sets
const categoryToQuestionSet = {
    "Fitness": specializedQuestionSets.fitness,
    "Brain": specializedQuestionSets.brain,
    "Energy": specializedQuestionSets.energy,
    "Digestion": specializedQuestionSets.digestion,
    "Cosmetics": specializedQuestionSets.cosmetics,
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

$(".next-question-lifestyle").one("click", function () {
    // Fade out the goals section
    $(".lifestyle").fadeOut(500);

    // Show the "choose-goals" section after a delay
    setTimeout(function () {
        $(".lifestyle-quiz").fadeIn(500);
    }, 500);
});
