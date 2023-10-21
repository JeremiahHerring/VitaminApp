const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn')
const quizSection = document.querySelector('.quiz-section')
const quizBox = document.querySelector('.quiz-box')

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

continueBtn.onclick = () => {

    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(0);
}

let questionCount = 0;

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
    questionCount++;
    showQuestions(questionCount);
    }
    else {
        console.log("Questionnare Completed");
    }
};

const optionList = document.querySelector('.option-list');

// getting questions and options from array

function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;
    
    let optionTag = '';

    // Loop through the options for the current question
    for (let i = 0; i < questions[index].options.length; i++) {
        optionTag += `<div class="option"><span>${questions[index].options[i]}</span></div>`;
    }

    optionList.innerHTML = optionTag;
}
