import { lifestyleQuestions, specializedQuestionSets } from './questions.js';
import { giveRecommendation } from './recommendationSystem.js';

// DEFINING ALL OUR VARIABLES
const main = document.querySelector('.main');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const nextBtn = document.querySelector('.next-btn');
const optionList = document.querySelector('.option-list');
const prevBtn = document.querySelector('.prev-btn');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');

prevBtn.classList.remove('active');
let currentQuestionSet = specializedQuestionSets.healthAndFitness;

let selectedGoals = [];
let sumTotalQ = 0;
$(".cont-btn").on("click", function () {
    selectedGoals = [];
    // Check which goals are selected
    $('.choose-goals input[type="checkbox"]:checked').each(function () {
        selectedGoals.push(this.name.toLowerCase());
    });

    // Check if at least one goal is selected
    if (selectedGoals.length > 0) {
        // Display questions based on selected goals
        sumTotalQ = giveTotalQuestion(selectedGoals);
        iterateThroughGoals(selectedGoals);
    } else {
        // If no checkbox is checked, you can show an alert or handle it as needed
        alert("Please select at least one goal before continuing.");
    }
});

function giveTotalQuestion(selectedGoals) {
    console.log(selectedGoals)
    let total = 0
    for (let x = 0; x < selectedGoals.length; ++x)
    {
        switch(selectedGoals[x]){
            case 'fitness':
                total += 4
                break
            case 'energy':
                total += 5
                break
            case 'brain':
                total += 3
                break
            case 'digestion':
                total += 3
                break
            case 'cosmetic':
                total += 5
                break
            case 'immunity':
                total += 5
                break
        }
    }
    console.log("Total amount of questions: " + sumTotalQ)
    return total
}

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
// Update the nextBtn click event to progress through goals
 // Update the nextBtn click event to progress through goals
    nextBtn.onclick = () => {
        if (nextBtn.classList.contains('active')) {
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
                fillCapsule();
            }
        }
    };
};
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
    
    // Convert the first character to uppercase and concatenate with the rest of the string
    const formattedSetName = setName.charAt(0).toUpperCase() + setName.slice(1);

    quizTitle.textContent = formattedSetName;
}

function updateLifestyleTitle(setName) {
    const lifestyleTitle = document.querySelector('.lifestyle-box h1');
    lifestyleTitle.textContent = setName;
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
        unfillCapsule();
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

let isFirstClick = true;
let currentParticle = 1;
let fillAmount = 0;
console.log(sumTotalQ)
console.log(fillAmount)
function fillCapsule() {
    const innerRect = document.getElementById("innerRect");
    const capsule = document.querySelector(".capsule");
    const particles = document.querySelectorAll(".particle");
    const currentParticleElement = document.querySelector(`.particle${currentParticle}`);
    
    //Particle
    particles.forEach(particle => {
        particle.style.display = "none"; // Hide all particles
    });
    currentParticleElement.style.display = "block";
    currentParticle = (currentParticle % 5) + 1;

    fillAmount += 300 / (sumTotalQ + 16)

    //Fill 
    if(isFirstClick){
        isFirstClick = false;
        console.log(fillAmount)
        innerRect.style.fill = "url(#colorGradient)";
        innerRect.style.width = `${fillAmount}px`;
    }
    else if (fillAmount <= 300) {
        console.log(sumTotalQ)
        console.log(fillAmount)
        innerRect.style.width = `${fillAmount}px`;
    }

    //Animation
    currentParticleElement.classList.add("animateDropAndDisappear");
    setTimeout(() => {         
        capsule.classList.add("wobble");
        currentParticleElement.classList.remove("animateDropAndDisappear");
        setTimeout(() => {
            capsule.classList.remove("wobble");
        }, 500);
    }, 700);
}

function unfillCapsule(){
    const innerRect = document.getElementById("innerRect");
    fillAmount -= 300 / (sumTotalQ + 16);
    console.log(fillAmount)
    innerRect.style.width = `${fillAmount}px`;
}

// Define a function to show questions from a given set
function showQuestionsFromSet(index) {
    if (index < currentQuestionSet.length) {
        showQuestions(index, currentQuestionSet);
    } else {
        // Handle the case where there are no more questions in the set
        // You can display a message or take some other action
    }
}

function showQuestionsFromLifeStyleSet(index) {
    if (index < currentQuestionSet.length) {
        showLifestyleQuestions(index, currentQuestionSet);
    } else {
        // Handle the case where there are no more questions in the set
        // You can display a message or take some other action
        console.log("No more questions in the lifestyle set");
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

function showLifestyleQuestions(index, questionSet) {
    const lifestyleList = document.querySelector('.lifestyle-list');

    if (questionSet && index >= 0 && index < questionSet.length) {
        const questionText = document.querySelector('.lifestyle-text');
        questionText.textContent = `${questionSet[index].numb}. ${questionSet[index].question}`;

        let optionTag = '';
        for (let i = 0; i < questionSet[index].options.length; i++) {
            optionTag += `<div class="option" data-index="${i}"><span>${questionSet[index].options[i]}</span></div>`;
        }

        lifestyleList.innerHTML = optionTag;

        const option = document.querySelectorAll('.option');
        option.forEach((opt, i) => {
            opt.addEventListener('click', () => lifestyleOptionSelected(opt));
        });
    }
}

// Get what the option the user clicked on
function optionSelected(answer) {
    const selectedOptionText = answer.textContent; // Get the text content of the selected option

    // Check if the selected option is not empty or undefined
    if (selectedOptionText.trim() !== "") {
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
    } else {
        // Show an alert or handle it in a way that prompts the user to select an option
        alert("Please select an option before proceeding.");
    }
}

function lifestyleOptionSelected(answer) {
    const lifestyleOptionText = answer.textContent; // Get the text content of the selected option
    userAnswers[questionTotal] = lifestyleOptionText;
    console.log(userAnswers)
    const allOptions = document.querySelectorAll('.lifestyle-list .option');
    allOptions.forEach(option => {
        option.classList.remove('active');
    answer.classList.add('active');
    isOptionSelected = true;
    $(".lifestyle-footer .next-btn1").addClass('active');
    });
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

let currentLifestyleQuestionCount = 0;
let currentLifestyleQuestionIndex = 0;
let lifestyleQuestionNumb = 1;

function initializeLifestyleQuiz() {
    currentQuestionSet = lifestyleQuestions;
    showQuestionsFromLifeStyleSet(0);
    updateLifestyleTitle("Lifestyle"); // Set a title for the lifestyle quiz


    // Update the click event for the "Next" button
    $(".lifestyle-footer .next-btn1").on("click", function () {
        if ($(".lifestyle-footer .next-btn1").hasClass('active')) {
            if (isOptionSelected) {
                if (currentLifestyleQuestionIndex < currentQuestionSet.length - 1) {
                    // If there are more questions, show the next question
                    fillCapsule2()
                    ++questionTotal
                    currentLifestyleQuestionIndex++;
                    showQuestionsFromLifeStyleSet(currentLifestyleQuestionIndex);
                    lifestyleQuestionNumb++;

                    // Reset isOptionSelected to false for the next question
                    isOptionSelected = false;

                    // Enable the "Next" button
                    $(".lifestyle-footer .next-btn1").removeClass('active');

                    if (lifestyleQuestionNumb >= 2) {
                        $(".lifestyle-footer .prev-btn1").addClass('active');
                    }
            } else {
                // If no more questions, transition to the next section or handle as needed
                // For example, you can call a function to handle the transition
                showResults();
            }
            } 
        } 
    });
    $(".lifestyle-footer .prev-btn1").on("click", function () {
        prevLifestyleQuestion();
    });
}

function prevLifestyleQuestion() {
    if (currentLifestyleQuestionIndex > 0) {
        --questionTotal
        // Go back to the previous question in the lifestyle set
        unfillCapsule2();
        currentLifestyleQuestionIndex--;
        showQuestionsFromLifeStyleSet(currentLifestyleQuestionIndex);
        lifestyleQuestionNumb--;

        // Check if you're now on the first question to deactivate the prevBtn
        if (currentLifestyleQuestionIndex <= 1) {
            $(".lifestyle-footer .prev-btn1").removeClass('active');
        }
    }
}
let vitaminsData = {} // This is gonna hold all of the data from the server.js
// Example function for transitioning to the next section
function showResults() {

    const storedUserName = localStorage.getItem('userName');

// Check if userName is available and not null
if (storedUserName) {
    // Do something with the userName, e.g., update the DOM
    const personNameElement = document.getElementById('personName');
    if (personNameElement) {
        personNameElement.textContent = storedUserName;
    }
} else {
    // Handle the case where userName is not available
    console.log('User name not found in localStorage.');
}

giveRecommendation(userAnswers, selectedGoals)
.then(vitaminsData => {
    // Assuming vitaminsData is an array of objects with vitamin information
    console.log("This is the vitaminsData: " + vitaminsData[0].vitamin.benefits_description);

    // Update the names of the vitamins based on vitaminsData
    const vitaminElements = document.querySelectorAll('.name');

    vitaminElements.forEach((element, index) => {
        // Assuming vitaminsData is an array of objects with vitamin information
        const vitaminName = vitaminsData[index].vitamin.Vitamin_Name;
        const prefixedName = "Vitamin " + vitaminName;
        element.textContent = prefixedName;
    });

    btn1.addEventListener('click', () => togglePopup(1))
    btn2.addEventListener('click', () => togglePopup(2))
    btn3.addEventListener('click', () => togglePopup(3))
    btn4.addEventListener('click', () => togglePopup(4))
    btn5.addEventListener('click', () => togglePopup(5))

    function togglePopup(index) {
        const popup = document.getElementById(`popup${index}`);
        const vitaminName = vitaminsData[index-1].vitamin.Vitamin_Name;
        const benefitsDescription = vitaminsData[index-1].vitamin.Benefits_Description;

        if (vitaminName) {
            const h1Element = popup.querySelector('h1');
            h1Element.textContent = "Vitamin " + vitaminName;

             // Update the p element with benefits description
            const pElement = popup.querySelector('p');
            pElement.textContent = benefitsDescription;

            popup.classList.toggle('active');
        }
    }

    // Hide the quiz section and show the results section
    $(".lifestyle-quiz").fadeOut(500);
    setTimeout(function () {
        $(".results-section").fadeIn(500);
    }, 500);
})
.catch(error => {
    console.error('Error in giveRecommendation:', error);
});
}
/*
function showResults() {
    vitaminsData = giveRecommendation(userAnswers,selectedGoals)
    console.log("This is the vitaminsData: " + vitaminsData[0].vitamin.Benefits_Description)
    $(".lifestyle-quiz").fadeOut(500);

    // Show the "lifestyle-quiz" section after a delay
    setTimeout(function () {
        $(".results-section").fadeIn(500);

    }, 500);
}
*/
$(".next-question-lifestyle").one("click", function () {
    // Fade out the lifestyle section
    $(".lifestyle").fadeOut(500);

    // Show the "lifestyle-quiz" section after a delay
    setTimeout(function () {
        $(".lifestyle-quiz").fadeIn(500);

        // Initialize the lifestyle quiz
        const innerRect2 = document.getElementById("innerRect2");
        innerRect2.style.width = `${fillAmount}px`;
        initializeLifestyleQuiz();
    }, 500);
});

let currentShape = 1;
function fillCapsule2() {
    const innerRect2 = document.getElementById("innerRect2");
    const capsule2 = document.querySelector(".capsule2");
    const shapes = document.querySelectorAll(".shape");
    const currentShapeElement = document.querySelector(`.shape${currentShape}`);
    
    //Particle
    shapes.forEach(shape => {
        shape.style.display = "none"; // Hide all particles
    });
    currentShapeElement.style.display = "block";
    currentShape = (currentShape % 5) + 1;

    //Fill 
    if (fillAmount <= 300) {
        console.log(sumTotalQ)
        console.log(fillAmount)
        fillAmount += 300 / (sumTotalQ + 16);
        console.log(fillAmount)
        innerRect2.style.width = `${fillAmount}px`;
    }

    //Animation
    currentShapeElement.classList.add("animateDropAndDisappear2");
    setTimeout(() => {         
        capsule2.classList.add("wobble");
        currentShapeElement.classList.remove("animateDropAndDisappear2");
        setTimeout(() => {
            capsule2.classList.remove("wobble");
        }, 500);
    }, 700);
}

function unfillCapsule2(){
    const innerRect2 = document.getElementById("innerRect2");
    fillAmount -= 300 / (sumTotalQ + 16);
    innerRect2.style.width = `${fillAmount}px`;
    console.log(fillAmount)
}

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });


