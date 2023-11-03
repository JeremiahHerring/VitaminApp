const initialQuestions = [
    {
        numb: 1,
        question: "What's Your Age?",
        options: [
            "0-17",
            "18-55",
            "55+"
        ]
    },
    {
        numb: 2,
        question: "What Is Your Gender?",
        options: [
            "Male",
            "Female"
        ]
    },
    {
        numb: 3,
        question: "What Is Your Height",
        options: [
            "145-149cm",
            "150-154cm",
            "155-159cm",
            "160-164cm",
            "165-169cm",
            "170-174cm",
            "175-179cm",
            "180-184cm",
            "185-189cm",
            "190-194cm",
            "195+ cm"
        ]
    },
    {
        numb: 4,
        question: "What Is Your Ethnicity",
        options: [
            "American Indian or Alaskan Native",
            "Asian",
            "Black",
            "Hispanic or Latino",
            "Native Hawaiian or Other Pacific Islander",
            "White"
        ]
    },
    {
        numb: 5,
        question: "What Is Your Weight?",
        options: [
            "Below 100 lbs",
            "100-120 lbs",
            "120-140 lbs",
            "140-160 lbs",
            "160-180 lbs",
            "180-200 lbs",
            "200-220 lbs",
            "220-240 lbs",
            "240-260 lbs",
            "260-280 lbs",
            "280-300 lbs",
            "300+ lbs"
        ]
    },
    {
        numb: 7,
        question: "What Are Your Goals?",
        options: [
            "Health & Fitness",
            "Mood",
            "Bones",
            "Cognitive Health",
            "Energy",
            "Sleep",
            "Digestion",
            "Hair, Skin & Nails",
            "Immunity",
            "Organs",
            "Joints",
        ]
    },
    {
      numb: 8,
      question: "How often do you consume foods rich in vitamin D (e.g., fatty fish, fortified dairy)?", 
      options: [
        "Daily",
        "A few times a week",
        "Rarely",
      ]
    },
    {
      numb: 9,
      question: "How often do you consume foods high in vitamin C (e.g., citrus fruits, berries)?", // <--- KHOI'S CHANGE
      options: [
        "Daily",
        "A few times a week",
        "Rarely",
      ]
    },
    {
      numb: 10,
      question: "How often do you consume foods rich in vitamin A (e.g., carrots, sweet potatoes, spinach)?", // <--- KHOI'S CHANGE
      options: [
        "Daily",
        "A few times a week",
        "Rarely",
      ]
    },
    {
      numb: 11,
      question: "How often do you consume foods rich in vitamin E (e.g., nuts, seeds, vegetable oils)?",  // <--- KHOI'S CHANGE
      options: [
        "Daily",
        "A few times a week",
        "Rarely",
      ]
    },
    {
      numb: 12,
      question: "How often do you consume foods rich in vitamin B(e.g., meat, poultry, fish, fortified cereals)?", 
      options: [
        "Daily",
        "A few times a week",
        "Rarely",
      ]
    },
]
const specializedQuestionSets = {
    healthAndFitness: [
      {
        numb: 1,
        question: "How frequently do you exercise?",
        options: [
            "Never",
            "Sometimes (once-twice a week)", 
            "Often (3 times a week)",
            "Very often (4-7) times a week",
            "I live in the gym"
            ],
      },
      
      // Add more questions for this category
    ],
    mood: [
      {
        numb: 1,
        question: "Are you currently taking any form of antidepressants? ", // <--- KHOI'S CHANGE
        options: ["Yes",
        "No"],
      },
      // Add more questions for this category
    ],
    bones: [
      {
        numb: 1,
        question: "Do you have osteoporosis?  ",  // <--- KHOI'S CHANGE
        options: ["Yes", 
        "No"],  
      },
    ],
    cognitiveHealth: [
        {
          numb: 1,
          question: "Cognitive Health Question 1",
          options: ["Option 1", "Option 2", "Option 3"],
        },
    ],
    energy: [
        {
          numb: 1,
          question: "Energy Question 1",
          options: ["Option 1", "Option 2", "Option 3"],
        },
    ],
    sleep: [
        {
          numb: 1,
          question: "Sleep Question 1",
          options: ["Option 1", "Option 2", "Option 3"],
        },
    ],
    digestion: [
        {
          numb: 1,
          question: "Digestion Question 1",
          options: ["Option 1", "Option 2", "Option 3"],
        },
    ],
    hairSkinNails: [
        {
          numb: 1,
          question: "Hair, Skin & Nails Question 1",
          options: ["Option 1", "Option 2", "Option 3"],
        },
    ],
    immunity: [
        {
          numb: 1,
          question: "Immunity Question 1",
          options: ["Option 1", "Option 2", "Option 3"],
        },
    ],
    organs: [
        {
          numb: 1,
          question: "Organs Question 1",
          options: ["Option 1", "Option 2", "Option 3"],
        },
    ],
    joints: [
        {
          numb: 1,
          question: "Joints Question 1",
          options: ["Option 1", "Option 2", "Option 3"],
        },
    ],
    
    // Add more categories and their respective questions
  };

  export { initialQuestions, specializedQuestionSets };


  