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
    console.log(userGoals)
    // 
    // userAnswers is given to us in an array of literal strings so 
    // userAnswers[0] is == ['0-17'], and not OptionA 
// Right now I am testing the question #6 answers
let qnum = 0 // This will be where the total questions are at
let fitnessQ = 4
let energyQ = 5
let brainQ = 3
let digestionQ= 3
let hairSkinNailsQ = 5
let immunityQ = 5
for(let x = 0; x < userGoals.length; ++x) {

switch(userGoals[x]) {
/*
Cases 1-Fitness 2- Energy 3-Brain 4- Digestion 5- HairSkin&Nails 6-Immunity
*/
    case 'Fitness': // We are in fitness category
        fitnessQ += qnum // This makes fitness = 4 more than qnum which is how many questions we have
        console.log(fitnessQ)
        for(let y = 0; qnum < fitnessQ; ++qnum, ++y){ // we need to increase qnum as we are using it for every single case
            switch(y+1) {
                case 1: // This means we are at the first question
                    switch(userAnswers[qnum]){
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
                    switch(userAnswers[qnum]){
                        case 'Resistance':
                            vitaminDScore += 4
                            vitaminB6Score += 4
                            vitaminB12Score += 4
                            break
                        case 'High-intensity':
                            vitaminB12Score += 2
                            vitaminB1Score += 2
                            vitaminB2Score += 2
                            vitaminB3Score += 2
                            vitaminB6Score += 3
                            break
                        case 'Endurance':
                            vitaminB1Score += 2
                            vitaminB2Score += 2
                            vitaminB3Score += 2
                            vitaminB6Score += 3
                            break
                        case 'None of these':
                            vitaminDScore += 2
                            break
                }
                case 3:
                    switch(userAnswers[qnum]){
                        case 'Performance':
                            vitaminB12Score += 1
                            vitaminB1Score += 1
                            vitaminB2Score += 1
                            vitaminB3Score += 1
                            vitaminB6Score += 2
                            VitaminCScore += 5
                            vitaminEScore += 4
                            break
                        case 'Breaking a sweat':
                            vitaminB1Score += 2
                            vitaminB2Score += 2
                            vitaminB3Score += 2
                            vitaminB6Score += 2
                            vitaminCScore += 5
                            break
                        case 'Muscle toning':
                            vitaminB6Score +=3
                            vitaminB12Score +=3
                            break
                        case 'Muscle building':
                            vitaminB6Score +=3
                            vitaminB6Score += 3
                            vitaminDScore +=3
                            break
                        case 'General health':
                            vitaminDScore += 3
                            vitaminCScore += 5
                            vitaminEScore += 5
                            break
                    }
                case 4:
                    switch(userAnswers[qnum]){
                        case 'Muscle recovery':
                            VitaminCScore += 4
                            vitaminEScore += 2
                            vitaminB6Score +=2
                            vitaminB12Score += 2
                            break
                        case 'Muscle cramping':

                            break
                        case 'Hydration':
                            vitaminCScore += 4
                            vitaminB6Score += 2
                            vitaminB12Score += 2
                            break
                        case 'Joints':
                            vitaminDScore += 2
                            vitaminCScore += 4
                            break
                        case 'None':
                            break
                    }
                }

            } // End of Health & Fitness Category
    case 'Energy': // We are in Energy category
        energyQ += qnum // This makes Energy = 5 more than qnum which is how many questions we have
        console.log(energyQ)
        for(let y = 0; qnum < energyQ; ++qnum, ++y){ // we need to increase qnum as we are using it for every single case
            switch(y+1) {
                case 1: // This means we are at the first question
                    switch(userAnswers[qnum]){
                        case 'Yes':
                            vitaminB6Score += 2
                            break
                        case 'No':
                            
                            break
                }
                case 2:
                    switch(userAnswers[qnum]){
                        case 'Yes':
                            vitaminB6Score += 2
                            break
                        case 'No':
                            break
                }
                case 3:
                    switch(userAnswers[qnum]){
                        case 'Yes':
                            vitaminB6Score += 2
                            vitaminB12Score += 2
                            break
                        case 'No':
                            break
                    }
                case 4:
                    switch(userAnswers[qnum]){
                        case 'Worked up':
                            vitaminB5Score += 4
                            vitaminB6Score += 2
                            vitaminB12Score += 2
                            break
                        case 'Drained':
                            vitaminCScore += 4
                            break
                    }
                case 5:
                    switch(userAnswers[qnum]){
                        case 'Rarely':
                            vitaminB5Score +=2
                            vitaminB6Score +=2
                            break
                        case 'Two to three days':
                            vitaminCScore += 3
                            break
                        case 'Every day':
                            vitaminDScore += 3
                            vitaminB5Score += 2
                            vitaminB6Score += 2
                            vitaminB12Score += 2
                            break
                    }
                }
            }// End of Energy
    case 'Brain': // We are in Brain category
    brainQ += qnum // This makes brain = 3 more than qnum which is how many questions we have
    for(let y = 0; qnum < brainQ; ++qnum, ++y){ // we need to increase qnum as we are using it for every single case
        switch(y+1) {
            case 1: // This means we are at the first question
                switch(userAnswers[qnum]){
                    case 'Yes':
                        vitaminB6Score += 2
                        vitaminB9Score += 4
                        vitaminB12Score += 2
                        vitaminDScore += 2
                        break
                    case 'No':
                        
                        break
            }
            case 2:
                switch(userAnswers[qnum]){
                    case 'Yes':
                        vitaminB5Score += 2
                        vitaminB6Score += 2
                        vitaminB12Score += 2
                        break
                    case 'No':
                        break;
            }
            case 3:
                switch(userAnswers[qnum]){ // Ask jeremiah to word this question more nicely lol
                    case 'Yes':
                        vitaminB5Score += 3
                        vitaminB6Score += 2
                        vitaminB12Score += 2
                        break
                    case 'No':
                        break
            }

        }
    } // End of Brain
// Skipping digestion for now, need better questions
    case 'Digestion': // We are in digestion category
    digestionQ += qnum // This makes fitness = 4 more than qnum which is how many questions we have
    for(let y = 0; qnum < digestionQ; ++qnum, ++y){ // we need to increase qnum as we are using it for every single case
        switch(y+1) {
            case 1: 
                switch(userAnswers[qnum]){
                    case 'Great':
                        break
                    case 'Average':
                        vitaminAScore += 3
                        vitaminDScore +=3
                        vitaminB6Score += 1
                        vitaminB12Score += 1
                        break
                    case 'Ocassional Issues':
                        vitaminDScore += 3
                        vitaminAScore += 5
                        vitaminB6Score += 3
                        vitaminB12Score += 3
                        break
                }
            case 2:
                switch(userAnswers[qnum]){
                    case 'Gut Health':
                        vitaminDScore += 4
                        vitaminCScore += 4
                        vitaminAScore += 3
                        break
                    case 'Indigestion':
                        vitaminB9Score += 5
                        vitaminB6Score += 2
                        vitaminAScore += 2
                        vitaminCScore +=2
                        vitaminEScore += 5
                        break
                    case 'Constipation':
                        vitaminB9Score += 6
                        break
            }
            case 3:
                switch(userAnswers[qnum]){
                    case 'Gas':
                        vitaminB12Score += 2
                        vitaminB6Score += 2
                        break
                    case 'Bloating':
                        vitaminB6Score += 4
                        break
                    case 'Burping':
                        vitaminB6Score +=3
                        break
                    case 'Indigestion':
                        vitaminB12Score += 2
                        break
                    case 'None':
                        break
            }
        }
    } // End of Digestion

    case 'Cosmetics': // We are in HairSkinNails category
    hairSkinNailsQ += qnum // This makes brain = 3 more than qnum which is how many questions we have
    for(let y = 0; qnum < hairSkinNailsQ; ++qnum, ++y){ // we need to increase qnum as we are using it for every single case
        switch(y+1) {
            case 1: // This means we are at the first question
                switch(userAnswers[qnum]){
                    case 'Dry':    
                    vitaminEScore += 3
                    vitaminCScore += 4
                        break
                    case 'Oily':    
                    vitaminAScore += 3
                    vitaminEScore += 2
                        break
                    case 'Uneven':
                        vitaminKScore += 5 
                        break
                    case 'Dull':
                        vitaminCScore += 3
                        vitaminB3Score += 5
                        break
                    case 'Pretty good':
                        break
            }
            case 2:
                switch(userAnswers[qnum]){
                    case 'Breakouts':
                        vitaminAScore += 3
                        break
                    case 'Hyperpigmentation':
                        vitaminCScore +=3
                        vitaminAScore +=3
                        break
                    case 'Wrinkles':
                        vitaminCScore += 2
                        vitaminEScore += 6
                        vitaminAScore += 2
                        break
                    case 'General aging':
                        vitaminDScore += 3
                        vitaminKScore += 2
                        break
                    case 'None':
                        break
            }
            case 3:
                switch(userAnswers[qnum]){
                    case 'Yes':
                        vitaminAScore +=2
                        vitaminCScore +=2
                        vitaminEScore += 5
                        break
                    case 'No':
                        break
            }
            case 4:
                switch(userAnswers[qnum]){
                    case 'Starting to thin':
                        vitaminEScore += 3
                        break
                    case 'Dry':
                        vitaminEScore +=3
                        vitaminAScore += 2
                        break
                    case 'Damaged':
                        vitaminCScore += 2
                        vitaminAScore += 2
                        break
                    case 'Growing slowly':
                        vitaminB5Score += 3
                        vitaminB6Score += 2
                        vitaminB12Score += 2
                        break
                    case "None of these":
                        break
                    
            }
            case 5:
                switch(userAnswers[qnum]){
                    case 'Strength':
                        vitaminEScore += 3
                        break
                    case 'Growth':
                        vitaminAScore +=2
                        vitaminCScore +=2
                        break
                    case 'Condition':
                        vitaminB12Score += 2
                        break
                    case 'None of these':
                        break
            }
        }
    } // End of hairSkinNails
    case 'Immunity': // We are in Immunity category
    immunityQ += qnum // This makes Immunity = 5 more than qnum which is how many questions we have
    for(let y = 0; qnum < immunityQ; ++qnum, ++y){ // we need to increase qnum as we are using it for every single case
        switch(y+1) {
            case 1: // This means we are at the first question
                switch(userAnswers[qnum]){
                    case 'Yes':
                        vitaminCScore +=2
                        vitaminDScore +=2
                        break
                    case 'No':
                        vitaminDScore +=1
                        break
            }
            case 2:
                switch(userAnswers[qnum]){
                    case 'Yes':
                        vitaminCScore += 3
                        vitaminDScore +=1
                        break
                    case 'No':
                        break
            }
            case 3:
                switch(userAnswers[qnum]){
                    case 'Yes':
                        vitaminB12Score +=1
                        vitaminB9Score += 3
                        vitaminB6Score += 1
                        vitaminCScore +=3
                        vitaminDScore +=3
                        break
                    case 'No':
                        break
            }
            case 4:
                switch(userAnswers[qnum]){
                    case 'Yes':
                        vitaminCScore +=3
                        vitaminDScore +=3
                        break
                    case 'No':
                        break
                }
            case 5:
                switch(userAnswers[qnum]){
                    case 'Yes':
                        vitaminKScore += 6
                        vitaminB12Score +=1
                        vitaminB9Score += 1
                        vitaminB6Score += 1
                        break
                    case 'No':
                        break
                }

        }
    } // End of Immunity


} // Finished the userGoals switch
} // Finished the userGoals Loop
let lifestyle = qnum + 16 // 
for (let y = 1; qnum < lifestyle; ++qnum, ++y) // this is the lifestyle question
{
    switch(y){
        case 1: 
            switch(userAnswers[qnum + 1]){ //qnum +1 as the first question was useless to the algorithm
                case 'Rarely':
                    vitaminCScore += 3
                    vitaminAScore += 3
                    break
                case 'Once or twice':
                    vitaminCScore += 3
                    vitaminAScore += 3
                    break
                case 'Three or more times':
                    break

            }
            case 2: 
            switch(userAnswers[qnum + 1]){ //qnum +1 as the first question was useless to the algorithm
                case 'Rarely':
                    vitaminKScore += 3
                    vitaminAScore += 3
                    break
                case 'Once or twice':
                    vitaminKScore += 6
                    vitaminAScore += 1
                    break
                case 'Three or more times':
                    break

            }
            case 3: 
            switch(userAnswers[qnum + 1]){ //qnum +1 as the first question was useless to the algorithm
                case 'Rarely':
                    vitaminDScore += 3
                    vitaminB12Score += 3
                    break
                case 'Once or twice':
                    vitaminDScore += 1
                    vitaminB12Score += 1
                    break
                case 'Three or more times':
                    break

            }
            case 4: 
            switch(userAnswers[qnum + 1]){ //qnum +1 as the first question was useless to the algorithm
                case 'Rarely':
                    vitaminDScore += 3
                    vitaminB12Score += 3
                    break
                case 'Once or twice':
                    vitaminDScore += 1
                    vitaminB12Score += 1
                    break
                case 'Three or more times':
                    break

            }
            case 5: 
            switch(userAnswers[qnum + 1]){ //qnum +1 as the first question was useless to the algorithm
                case 'Rarely':
                    vitaminB12Score += 1
                    break
                case 'Once or twice':
                    break
                case 'Three or more times':
                    vitaminB12Score -= 3
                    break

            }
            case 7: 
            switch(userAnswers[qnum + 1]){ //qnum +1 as the first question was useless to the algorithm
                case 'Rarely':
                    vitaminB12Score += 3
                    break
                case 'Once or twice':
                    break
                case 'Three or more times':
                    vitaminB12Score -= 3
                    break

            }
            case 8: 
            switch(userAnswers[qnum + 1]){ //qnum +1 as the first question was useless to the algorithm
                case 'Rarely':
                    vitaminDScore += 3
                    break
                case 'Once or twice':
                    vitaminDScore += 1
                    break
                case 'Three or more times':
                    vitaminDScore -= 3
                    break

            }
            case 9: 
            switch(userAnswers[qnum + 1]){ //qnum +1 as the first question was useless to the algorithm
                case 'Yes':
                    vitaminB1Score += 1
                    vitaminB12Score += 1
                    vitaminB6Score += 2
                    vitaminAScore += 5
                    break
                case 'No':
                    break
            
            }
    
    }
} 
// Create an array of objects with vitamin names and scores
const vitaminArray = [
    { vitamin: 'A', score: vitaminAScore },
    { vitamin: 'B1', score: vitaminB1Score },
    { vitamin: 'B2', score: vitaminB2Score },
    { vitamin: 'B3', score: vitaminB3Score },
    { vitamin: 'B5', score: vitaminB5Score },
    { vitamin: 'B6', score: vitaminB6Score },
    { vitamin: 'B9', score: vitaminB9Score },
    { vitamin: 'B12', score: vitaminB12Score },
    { vitamin: 'Biotin', score: biotinScore },
    { vitamin: 'C', score: vitaminCScore },
    { vitamin: 'Choline', score: cholineScore },
    { vitamin: 'D', score: vitaminDScore },
    { vitamin: 'E', score: vitaminEScore },
    { vitamin: 'K', score: vitaminKScore },
  ];
  
  // Sort the array in descending order based on scores
  vitaminArray.sort((a, b) => b.score - a.score);
  
  // Get the top five entries
  const topFiveVitamins = vitaminArray.slice(0, 5);
  
  // Create an array to store the recommended vitamins
  const vitaminRec = [];
  
  // Add the top five vitamins to the recommendation array
  topFiveVitamins.forEach(({ vitamin }) => {
    vitaminRec.push(vitamin);
  });
  
  console.log("Top Five Vitamins:", vitaminRec);
/*
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
*/

if (vitaminRec.length > 0) {
    // Return the fetch promise
    return fetch('http://localhost:3000/Api/calculateVitamins', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(vitaminRec),
    })
    .then(response => response.json())
    .then(result => {
        console.log(result);
        return result; // Return the result of the fetch
    })
    .catch(error => {
        console.error('Error:', error);
    });
} else {
    // Handle case where vitaminRec is empty and we recommend nothing.
    return Promise.resolve([]);
}
}
