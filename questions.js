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
        numb: 6,
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
      numb: 7,
      question: "How often do you consume foods rich in vitamin D (e.g., fatty fish, fortified dairy)?", 
      options: [
        "Daily",
        "A few times a week",
        "Rarely",
      ]
    },
    {
      numb: 8,
      question: "How often do you consume foods high in vitamin C (e.g., citrus fruits, berries)?", // <--- KHOI'S CHANGE
      options: [
        "Daily",
        "A few times a week",
        "Rarely",
      ]
    },
    {
      numb: 9,
      question: "How often do you consume foods rich in vitamin A (e.g., carrots, sweet potatoes, spinach)?", // <--- KHOI'S CHANGE
      options: [
        "Daily",
        "A few times a week",
        "Rarely",
      ]
    },
    {
      numb: 10,
      question: "How often do you consume foods rich in vitamin E (e.g., nuts, seeds, vegetable oils)?",  // <--- KHOI'S CHANGE
      options: [
        "Daily",
        "A few times a week",
        "Rarely",
      ]
    },
    {
      numb: 11,
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
      {
        numb: 2,
        question: "How long do you exercise?", 
        options: [
            "0-15min",
            "15-30min", 
            "30min - 1hr",
            "1hr+",
            ],
      },
      {
        numb: 3,
        question: "What physical activities do you participate in?", 
        options: [
            "Weightlifting/Strength",
            "Cardio/Running/Swimming", 
            "Yoga/Stretching/Pilates",
            "Mixture",
            ],
      },
      // Add more questions for this category
    ],
    mood: [
      {
        numb: 1,
        question: "Do you have any form of mood or anxiety disorder? ", 
        options: ["Yes",
        "No"],
      },
      {
        numb: 2,
        question: "Are you diagnosed with depression or bipolar disorder? ", 
        options: ["Yes",
        "No"],
      },
      {
        numb: 3,
        question: "Are you currently taking any form of antidepressants? ", 
        options: ["Yes",
        "No"],
      },
      // Add more questions for this category
    ],
    bones: [
      {
        numb: 1,
        question: "Do you consume dairy products (such as milk, yogurt and cheese)?  ",  
        options: ["Yes", 
        "No"],  
      },
      {
        numb: 2,
        question: "Do you have osteoporosis?  ",  
        options: ["Yes", 
        "No"],  
      },
      {
        numb: 3,
        question: "Are you taking corticosteroid medications on a long-term basis?  ",  
        options: ["Yes", 
        "No"],  
      },
      // Add more questions for this category
    ],
    cognitiveHealth: [
        {
          numb: 1,
          question: "Are you diagnosed with dementia or experiencing a hard time remembering?",
          options: ["Yes", 
          "No"],
        },
        {
          numb: 2,
          question: "Do you experience high levels of stress?",
          options: ["Yes", 
          "No"],
        },
        {
          numb: 3,
          question: "Do you socialize with other people often?",
          options: ["Seldom", 
          "Occasional", 
          "Often"],
        },
    ],
    energy: [
        {
          numb: 1,
          question: "How often do you experience fatigue?",
          options: ["Never", 
          "Occasional", 
          "Often"],
        },
        {
          numb: 2,
          question: "How many hours of sleep do you get?",
          options: ["Never", 
          "Occasional", 
          "Often"],
        },
        {
          numb: 3,
          question: "Do you rely on caffeine or energy drinks?",
          options: ["Never", 
          "Occasional", 
          "Often"],
        },
    ],
    sleep: [
        {
          numb: 1,
          question: "Do you have trouble going to sleep?",
          options: ["Never", 
          "Occasional", 
          "Often"],
        },
        {
          numb: 2,
          question: "Are you getting a full night’s worth of sleep?",
          options: ["Yes", 
          "No"],
        },
        {
          numb: 3,
          question: "Are you taking naps throughout the day?",
          options: ["Never", 
          "Occasional", 
          "Often"],
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
          question: "Do you experience excessive hair loss or shedding?",
          options: ["Never", 
          "Occasional", 
          "Often"],
        },
        {
          numb: 2,
          question: "Do you have any nail-related concerns (e.g., nail-biting, fungal infections, ingrown nails)?",
          options: ["Never", 
          "Occasional", 
          "Often"],
        },
        {
          numb: 3,
          question: "Are you currently facing any skin issues or conditions (e.g., acne, eczema, psoriasis)?",
          options: ["No", 
          "Occasional", 
          "Yes, Often"],
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
          question: "Have you ever been diagnosed with or do you currently have any joint-related conditions?",
          options: ["Yes", 
          "No", 
          "Unsure"],
        },
        {
          numb: 2,
          question: "Have you had any injuries or traumas to your joints in the past?",
          options: ["Yes", 
          "No"],
        },
        {
          numb: 3,
          question: "Do you experience any joint pain, stiffness, or swelling, particularly after physical activity or in the morning?",
          options: ["Never", "Occasional", "Often"],
        },
    ],
    eyesight: [   
      {
        numb: 1,
        question: "Do you have any vision problems?",
        options: ["No", 
        "Moderate", 
        "Extreme"],
      },
      {
        numb: 2,
        question: "Have you been diagnosed with any eye diseases, such as macular degeneration, glaucoma, or cataracts?",
        options: ["No", 
        "Yes", 
        "Something Else"],
      },
      {
        numb: 3,
        question: "Do you have a family history of eye disease?",
        options: ["Yes", 
        "No"],
      },
  ],
    
    // Add more categories and their respective questions
  };

  export { initialQuestions, specializedQuestionSets };


  