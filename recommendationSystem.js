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

export function giveRecommendation(userAnswers){
    console.log("we in giv reccomendation" );
    console.log(userAnswers);
    // 
    // userAnswers is given to us in an array of literal strings so 
    // userAnswers[0] is == ['0-17'], and not OptionA 
// Right now I am testing the question #6 answers

let category = userAnswers[5]; // This is where we ask the goal and send them to the questions specifically for that goal
let qcount = 7; // We are on question 7 
switch(category) {
    case 'Health & Fitness': // We know the exact answers to the questions in Health & Fitness, so we assign points to each answer
        for(let qcount = 6; qcount < userAnswers.length; ++qcount){
            switch(qcount) {
                case 6:
                    switch(userAnswers[qcount]){
                        case 'Sometimes (once-twice a week)':
                            vitaminB1Score +=1 
                            vitaminB2Score +=1
                            vitaminB3Score +=1
                            vitaminB5Score +=1
                            vitaminB6Score +=1
                            break
                        case 'Often (3 times a week)':
                            break
                        case 'Very often (4-7) times a week':
                            vitaminAScore +=5
                            break
                        case 'Never':
                            vitaminDScore += 3
                            break
                }
                case 7:
                    switch(userAnswers[qcount]){
                        case '0-15min':
                            break
                        case '15-30min':
                            break
                        case '30min - 1hr':
                            break
                        case '1hr+':
                            break
                }
                case 8:
                    switch(userAnswers[qcount]){
                        case 'Weightlifting/Strength':
                            break
                        case 'Cardio/Running/Swimming':
                            break
                        case 'Yoga/Stretching/Pilates':
                            break
                        case 'Mixture':
                            break
                }

            }
    } // End of Health & Fitness Category
    case 'Muscle': // We know the exact answers to the questions in Health & Fitness, so we assign points to each answer
    for(let qcount = 6; qcount < userAnswers.length; ++qcount){
        switch(qcount) {
            case 6:
                switch(userAnswers[qcount]){
                    case 'Never':
                        break
                    case 'Rarely':
                        vitaminDScore += 3
                        break
                    case 'Frequently':
                        vitaminDScore += 5
                        console.log("we in frequentyly")
                        break
            }
            case 7:
                switch(userAnswers[qcount]){
                    case 'yes':
                        vitaminDScore += 12
                        break
                    case 'no':
                        break
                    case 'unsure':
                        break
            }
            case 8:
                switch(userAnswers[qcount]){
                    case 'Strong and Healthy':
                        break
                    case 'Average':
                        break
                    case 'Weak or Fatigued':
                        vitaminDscore += 4
                        break
            }

        }
} // End of Muscle Category 
case 'Bones': // We know the exact answers to the questions in Health & Fitness, so we assign points to each answer
for(let qcount = 6; qcount < userAnswers.length; ++qcount){
    switch(qcount) {
        case 6:
            switch(userAnswers[qcount]){
                case 'Strong and Healthy':
                    break
                case 'Average':
                    vitaminDScore += 3
                    break
                case 'Weak or Brittle':
                    vitaminDscore += 6
                    break
        }
        case 7:
            switch(userAnswers[qcount]){
                case 'yes':
                    break
                case 'no':
                    vitaminDScore += 3
                    break
        }
        case 8:
            switch(userAnswers[qcount]){
                case 'Yes':
                    vitaminDScore += 10
                    break
                case 'No':
                    break
                case 'Unsure':
                    break
        }
        case 9:
            switch(userAnswers[qcount]){
                case 'Yes':
                    break
                case 'Ocassionally':
                    break
                case 'No':
                    break
            }
    }
} // End of Muscle Category 
    case 'Mood':
        break;
    case 'Mood': //<---- Change this to Muscle :)
        break;
    case 'Bones':
        for (let qcount = 7; qcount < userAnswers.length; qcount++) {
            // we know what question #6 is so we right switch cases for answers 
        }
        break;
    case 'Cognitive Health':
        break;
    case 'Energy':
        break;
    case 'Sleep':
        break;
    case 'Digestion':
        break;
    case 'Hair, Skin & Nails':
        break;
    case 'Immunity':
        break;
    case 'Organs':
        break;
    case 'Joints':
        break;
}
const vitaminRec = []; // This will be used to send fetch request to the backend database
const threshold = 3; // An arbitrary number, 3 does not mean anything
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
if (vitaminRec.length > 0) { // If there is a value, send a fetch request.
    let vitaminData = {}
    fetch('http://localhost:3000/Api/calculateVitamins', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(vitaminRec),
    })
    .then(response => response.json())
    .then(result => {
        // Handle the response from the server
        console.log(result);
        vitaminData = result
        console.log(`ID: ${vitaminData[0].vitamin.ID}`)
        console.log(`Sources: ${vitaminData[0].vitamin.Sources}`)
       
    })
    .catch(error => {
        console.error('Error:', error);
    });
    }
     return; // Handle case where vitaminRec is empty and we recommend nothing.
    }
