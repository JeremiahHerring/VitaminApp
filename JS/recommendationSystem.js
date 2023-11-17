console.log("we up in recomendation");
// VITAMIN RECOMMENDATION SYSTEM
// If vitamin score for a specific vitamin is past a certain threshhold,
// the vitamin is recommended to the user, the vitamin 

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

// This function will return an array of the vitamins to which will 
// be sent to the backend to be parsed and used to query the database
export function giveRecommendation(userAnswers, userGoals){
    console.log("we in giv reccomendation n shii");
    // 
    // userAnswers is given to us in an array of literal strings so 
    // userAnswers[0] is == ['0-17'], and not OptionA 
// Right now I am testing the question #6 answers
let qnum = 1 // This will be where the total questions are at
let fitnessQ = 4
let energyQ = 5
let brainQ = 3
let digestionQ= 2
let hairSkinNailsQ = 7
let immunityQ = 5
for(let x = 0; x < userGoals.length; ++x) {

switch(userGoals[x]) {
/*
Cases 1-Fitness 2- Energy 3-Brain 4- Digestion 5- HairSkin&Nails 6-Immunity
*/
    case 1: // We are in fitness category
        fitnessQ += qnum // This makes fitness = 4 more than qnum which is how many questions we have
        for(let y = 0; qnum < fitnessQ; ++qnum, ++y){ // we need to increase qnum as we are using it for every single case
            switch(y+1) {
                case 1: // This means we are at the first question
                    switch(userAnswers[y]){
                        case 'Rarely':
                            vitaminDScore +=1 
                            vitaminB12Score += 4
                            break
                        case 'Two to four times':
                            vitaminDScore +=3
                            break
                        case 'Five or more times':
                            vitaminAScore +=5
                            break
                }
                case 2:
                    switch(userAnswers[y]){
                        case 'Resistance':
                            break
                        case 'High-intensity':
                            break
                        case 'Endurance':
                            break
                        case 'None of these':
                            break
                }
                case 3:
                    switch(userAnswers[y]){
                        case 'Performance':
                            break
                        case 'Breaking a sweat':
                            break
                        case 'Muscle toning':
                            break
                        case 'Muscle building':
                            break
                        case 'General health':
                            break
                    }
                case 4:
                    switch(userAnswers[y]){
                        case 'Muscle recovery':
                            break
                        case 'Muscle cramping':
                            break
                        case 'Hydration':
                            break
                        case 'Joints':
                            break
                        case 'None':
                            break
                    }
                }

            } // End of Health & Fitness Category
    case 2: // We are in Energy category
        energyQ += qnum // This makes Energy = 5 more than qnum which is how many questions we have
        for(let y = 0; qnum < energyQ; ++qnum, ++y){ // we need to increase qnum as we are using it for every single case
            switch(y+1) {
                case 1: // This means we are at the first question
                    switch(userAnswers[y]){
                        case 'Yes':
                            vitaminDScore +=1 
                            vitaminB12Score += 4
                            break
                        case 'No':
                            vitaminDScore +=3
                            break
                }
                case 2:
                    switch(userAnswers[y]){
                        case 'Yes':
                            break
                        case 'No':
                            break
                }
                case 3:
                    switch(userAnswers[y]){
                        case 'Yes':
                            break
                        case 'No':
                            break
                    }
                case 4:
                    switch(userAnswers[y]){
                        case 'Worked up':
                            break
                        case 'Drained':
                            break
                    }
                case 5:
                    switch(userAnswers[y]){
                        case 'Rarely':
                            break
                        case 'Two to three days':
                            break
                        case 'Every day':
                            break
                    }
                }
            }// End of Energy
    case 3: // We are in Brain category
    brainQ += qnum // This makes brain = 3 more than qnum which is how many questions we have
    for(let y = 0; qnum < brainQ; ++qnum, ++y){ // we need to increase qnum as we are using it for every single case
        switch(y+1) {
            case 1: // This means we are at the first question
                switch(userAnswers[y]){
                    case 'Yes':
                        break
                    case 'No':
                        
                        break
            }
            case 2:
                switch(userAnswers[y]){
                    case 'Yes':
                        break
                    case 'No':
                        break;
            }
            case 3:
                switch(userAnswers[y]){ // Ask jeremiah to word this question more nicely lol
                    case 'Yes':
                        break
                    case 'No':
                        break
            }

        }
    } // End of Brain

    case 4: // We are in digestion category
    digestionQ += qnum // This makes fitness = 4 more than qnum which is how many questions we have
    for(let y = 0; qnum < digestionQ; ++qnum, ++y){ // we need to increase qnum as we are using it for every single case
        switch(y+1) {
            case 1: // This means we are at the first question
                switch(userAnswers[x]){
                    case 'Less than once a day':
                        break
                    case 'About once a day':
                        break
                    case 'More than once a day':
                        break
                    case 'Irregular':
                        break
            }
            case 2:
                switch(userAnswers[x]){
                    case 'Gas':
                        break
                    case 'Bloating':
                        break
                    case 'Burping':
                        break
                    case 'Indigestion':
                        break
                    case 'None':
                        break
            }
        }
    } // End of Digestion
    case 5: // We are in HairSkinNails category
    hairSkinNailsQ += qnum // This makes brain = 3 more than qnum which is how many questions we have
    for(let y = 0; qnum < hairSkinNailsQ; ++qnum, ++y){ // we need to increase qnum as we are using it for every single case
        switch(y+1) {
            case 1: // This means we are at the first question
                switch(userAnswers[y]){
                    case 'Dry':    
                        break
                    case 'Oily':    
                        break
                    case 'Uneven':
                        break
                    case 'Dull':
                        break
                    case 'Pretty good':
                        break
            }
            case 2:
                switch(userAnswers[y]){
                    case 'Breakouts':
                        break
                    case 'Hyperpigmentation':
                        break
                    case 'Wrinkles':
                        break
                    case 'Elasticity':
                        break
                    case 'General aging':
                        break
                    case 'None':
                        break
            }
            case 3:
                switch(userAnswers[y]){
                    case 'Yes':
                        break
                    case 'No':
                        break
            }
            case 4:
                switch(userAnswers[y]){
                    case 'Yes':
                        break
                    case 'No':
                        break
            }
            case 5:
                switch(userAnswers[y]){
                    case 'Yes':
                        break
                    case 'No':
                        break
            }
            case 6:
                switch(userAnswers[y]){
                    case 'Starting to thin':
                        break
                    case 'Dry':
                        break
                    case 'Damaged':
                        break
                    case 'Growing Slowly':
                        break
                    case 'None of these':
                        break
            }
            case 7:
                switch(userAnswers[y]) {
                    case 'Strength':
                        break
                    case 'Growth':
                        break
                    case 'Condition':
                        break
                    case 'None of these':
                        break
                }
        }
    } // End of hairSkinNails
    case 6: // We are in Immunity category
    imunnityQ += qnum // This makes Immunity = 5 more than qnum which is how many questions we have
    for(let y = 0; qnum < immunityQ; ++qnum, ++y){ // we need to increase qnum as we are using it for every single case
        switch(y+1) {
            case 1: // This means we are at the first question
                switch(userAnswers[y]){
                    case 'Yes':
                        break
                    case 'No':
                        vitaminDScore +=3
                        break
            }
            case 2:
                switch(userAnswers[y]){
                    case 'Yes':
                        break
                    case 'No':
                        break
            }
            case 3:
                switch(userAnswers[y]){
                    case 'Yes':
                        break
                    case 'No':
                        break
            }
            case 4:
                switch(userAnswers[y]){
                    case 'Yes':
                        break
                    case 'No':
                        break
                }
            case 5:
                switch(userAnswers[y]){
                    case 'Yes':
                        break
                    case 'No':
                        break
                }

        }
    } // End of Immunity


} // Finished the userGoals switch
} // Finished the userGoals Loop
lifestyle = qnum + 16 // 
for (let y = 0; qnum < lifestyle; ++qnum, ++y) // this is the lifestyle question
{

} 

const vitaminRec = []; // This will be used to send fetch request to the backend database
let threshold = 3; // An arbitrary number, 3 does not mean anything
if (vitaminAScore >= threshold) {
    vitaminRec.push('A')
}
if (vitaminB1Score >= threshold) {
    vitaminRec.push('B1');
}
if (vitaminB2Score >= threshold) {
    vitaminRec.push('B2');
}
if (vitaminB3Score >= threshold) {
    vitaminRec.push('B3');
}
if (vitaminB5Score >= threshold) {
    vitaminRec.push('B5');
}
if (vitaminB6Score >= threshold) {
    vitaminRec.push('B6');
}
if (vitaminB9Score >= threshold) {
    vitaminRec.push('B9');
}
if (vitaminB12Score >= threshold) {
    vitaminRec.push('B12');
}
if (biotinScore >= threshold) {
    vitaminRec.push('Biotin');
}
if (vitaminCScore >= threshold) {
    vitaminRec.push('C');
}
if (cholineScore >= threshold) {
    vitaminRec.push('Choline');
}
if (vitaminDScore >= threshold) {
    vitaminRec.push('D');
}
if (vitaminEScore >= threshold) {
    vitaminRec.push('E');
}
if (vitaminKScore >= threshold) {
    vitaminRec.push('K');
}
console.log(vitaminRec);
const data = { vitamins: vitaminRec };

fetch('/api/calculateVitamins', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then(response => response.json())
  .then(result => {
    // Handle the response from the server
    console.log(result);
  })
  .catch(error => {
    console.error('Error:', error);
  });
return vitaminRec; 
}
