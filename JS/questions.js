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
    //Modified
    {
        numb: 3,
        question: "What Is Your Height?",
        options: [
            "< 4'7ft  (< 1.45m)",
            "4'7-4'8ft (1.45-1.49m)",
            "4'9-5'0ft (1.50-1.54m)",
            "5'0-5.2ft (1.55-1.59m)",
            "5'2-5'3ft (1.60-1.64m)",
            "5'4-5'5ft (1.65-1.69m)",
            "5'5-5'7ft (1.70-1.74m)",
            "5'7-5'8ft (1.75-1.79m)",
            "5'9-6'0ft (1.80-1.84m)",
            "6'0-6'2ft (1.85-1.89m)",
            "6'2-6'3ft (1.90-1.94m)",
            "> 6'3ft (> 1.95m)"
        ]
    },
    //Modified
    {
        numb: 4,
        question: "What Is Your Ethnicity?", 
        options: [
            "Cacausian",
            "African American",
            "Hispanic",
            "Asian",
            "Middle Eastern",
            "Native American",
            "Native Hawaiian or Pacific Islander",
            "Bi/Multi Racial"
        ]
    },
    {
        numb: 5,
        question: "What Is Your Weight?",
        options: [
            "< 100 lbs (< 45.3kg)",
            "100-120lbs (45.3-54.4kg)",
            "120-140lbs (54.4-63.5kg)",
            "140-160lbs (63.5-72.5kg)",
            "160-180lbs (72.5-81.6kg)",
            "180-200lbs (81.6-90.7kg)",
            "200-220lbs (90.7-99.7kg)",
            "220-240lbs (99.7-108.8kg)",
            "240-260lbs (108.8-117.9kg)",
            "260-280lbs (117.9-127kg)",
            "280-300lbs (127-136kg)",
            "> 300lbs (> 127-136kg)"
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
    // {
    //   numb: 7,
    //   question: "How often do you consume foods rich in vitamin D (e.g., fatty fish, fortified dairy)?", 
    //   options: [
    //     "Daily",
    //     "A few times a week",
    //     "Rarely",
    //   ]
    // },
    // {
    //   numb: 8,
    //   question: "How often do you consume foods high in vitamin C (e.g., citrus fruits, berries)?", // <--- KHOI'S CHANGE
    //   options: [
    //     "Daily",
    //     "A few times a week",
    //     "Rarely",
    //   ]
    // },
    // {
    //   numb: 9,
    //   question: "How often do you consume foods rich in vitamin A (e.g., carrots, sweet potatoes, spinach)?", // <--- KHOI'S CHANGE
    //   options: [
    //     "Daily",
    //     "A few times a week",
    //     "Rarely",
    //   ]
    // },
    // {
    //   numb: 10,
    //   question: "How often do you consume foods rich in vitamin E (e.g., nuts, seeds, vegetable oils)?",  // <--- KHOI'S CHANGE
    //   options: [
    //     "Daily",
    //     "A few times a week",
    //     "Rarely",
    //   ]
    // },
    // {
    //   numb: 11,
    //   question: "How often do you consume foods rich in vitamin B(e.g., meat, poultry, fish, fortified cereals)?", 
    //   options: [
    //     "Daily",
    //     "A few times a week",
    //     "Rarely",
    //   ]
    // },
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
    /*
    mood: [   <--- Sub-Category 
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
    */
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
          numb: 2,  //Modified 
          question: "Are you diagnosed with any types of Depression or Anxiety-related disorders?",
          options: ["Yes", 
                    "No"],
        },
        {
          numb: 3,
          question: "How often do you socialize?",
          options: ["Seldom", 
                    "Occasionally", 
                    "Often"],
        },
    ],
    energy: [
        {
          numb: 1,
          question: "How often do you experience fatigue?",
          options: ["Never", 
                    "Occasionally", 
                    "Often"],
        },
        {
          numb: 2,
          question: "How many hours of sleep do you get?",
          options: ["Never", 
                    "Occasionally", 
                    "Often"],
        },
        {
          numb: 3,
          question: "Do you rely on caffeine or energy drinks?",
          options: ["Yes", 
                    "No", 
                    "Sometimes"],
        },
    ],
    sleep: [
        {
          numb: 1,
          question: "Do you have trouble going to sleep?",
          options: ["Never", 
                    "Occasionally", 
                    "Often"],
        },
        {
          numb: 2,
          question: "Are you getting a full night’s worth of sleep? (at least 8 hours)",
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
          question: "Have you been diagnosed with any gastrointestinal conditions?",
          options: ["Yes", "No"],
        },
        {
          numb: 2,
          question: "Do you experience frequent digestive discomfort, such as bloating, gas, indigestion, or heartburn?",
          options: ["None", "Occasional", "Frequent"],
        },
        {
          numb: 3,
          question: "Do you take any supplements or probiotics to promote a healthy gut?",
          options: ["None", "Occasional", "Frequent"],
        },
    ],
    hairSkinNails: [
        {
          numb: 1,
          question: "Do you experience excessive hair loss or shedding?",
          options: ["Never", 
                    "Occasionally", 
                    "Often"],
        },
        {
          numb: 2,
          question: "Do you have any nail-related concerns (e.g., nail-biting, fungal infections, ingrown nails)?",
          options: ["Never", 
                    "Occasionally", 
                    "Often"],
        },
        {
          numb: 3,
          question: "Are you currently facing any skin issues or conditions (e.g., acne, eczema, psoriasis)?",
          options: ["Yes, a little bit", 
                    "Yes, a lot", 
                    "No, not at all"],
        },
    ],
    immunity: [
        {
          numb: 1,
          question: "Do you frequently experience colds, flu, or other infections?",
          options: ["Yes", "No"],
        },
        {
          numb: 2,
          question: "Have you ever been diagnosed with an autoimmune disease?",
          options: ["Yes", "No", "Unsure"],
        },
        {
          numb: 3,
          question: "Do you have any chronic conditions that may impact your immune system (e.g., diabetes, HIV, cancer)?",
          options: ["Yes", "No"],
        },
    ],
    organs: [  
        {
          numb: 1,
          question: "Have you ever been diagnosed with any chronic medical conditions or diseases related to organ health?",
          options: ["Yes", "No", "Unsure"],
        },
        {
          numb: 2,
          question: "Do you have a family history of organ-related conditions?",
          options: ["Yes", "No", "Unsure"],
        },
        {
          numb: 3,
          question: "Do you have any dietary restrictions or special diets that may affect organ health?",
          options: ["Yes", "No"],
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
          options: ["Never", 
          "Occasional", 
          "Often"],
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
                  "Yes, but not listed above"],
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


  