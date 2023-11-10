import { initialQuestions, specializedQuestionSets } from './questions.js'
import {giveRecommendation} from "./recommendationSystem.js";

document.addEventListener('DOMContentLoaded', function () {

const textBlocks = document.querySelectorAll(".text-block")
let currentIndex = 0

function toggleTextBlocks() {
    textBlocks[currentIndex].classList.remove('show');
    currentIndex = (currentIndex + 1) % textBlocks.length;
    textBlocks[currentIndex].classList.add('show')
}

setInterval(toggleTextBlocks, 5000)
textBlocks[currentIndex].classList.add('show')

})