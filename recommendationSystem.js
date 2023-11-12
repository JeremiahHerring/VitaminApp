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
    console.log("we in giv reccomendation n shii" );
    console.log(userAnswers);
    // 
    // userAnswers is given to us in an array of literal strings so 
    // userAnswers[0] is == ['0-17'], and not OptionA 
// Right now I am testing the question #6 answers
for(let qcount = 6; qcount < userAnswers.length; ++qcount){
    switch (userAnswers[qcount]){
        case 'Daily':
            // No change as we do not need to give them any vitamins
            break;
        case 'A few times a week':
            vitaminDScore++;
            break;
     case 'Rarely':
            vitaminDScore += 3; // I am using 3 to test threshold, may not be a good recommendation
            break;
    }
    
}
let category = userAnswers[5]; // This is where we ask the goal and send them to the questions specifically for that goal
let qcount = 7; // We are on question 7 
switch(category) {
    case 'Health & Fitness': // We know the exact answers to the questions in Health & Fitness, so we assign points to each answer
        switch (userAnswers[6]){
        case 'Very often (4-7) times a week':
            vitaminAScore +=5 // for test
            /*
            vitaminB1Score +=5
            vitaminB2Score +=5
            vitaminB3Score +=5
            vitaminB5Score +=5
            vitaminB6Score +=5
            */
            break;
            case 'Sometimes (once-twice a week)':
            vitaminB1Score +=1 
            vitaminB2Score +=1
            vitaminB3Score +=1
            vitaminB5Score +=1
            vitaminB6Score +=1
            break;
           case 'Often (3 times a week)':
                vitaminDScore += 3; // I am using 3 to test threshold, may not be a good recommendation
            break;
           case 'Never':
            vitaminD += 3
            break;
        }
        
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
        console.log(`Description: ${vitaminData[0].vitamin.Description}`)
       
    })
    .catch(error => {
        console.error('Error:', error);
    });
    }
     return; // Handle case where vitaminRec is empty and we recommend nothing.
    }
