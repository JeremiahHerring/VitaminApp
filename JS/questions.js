const specializedQuestionSets = {
    healthAndFitness: [
      {
        numb: 1,
        question: "In an average week, you exercise:",
        question_desc: "",
        options: [
            "Rarely",
            "Two to four times", 
            "Five or more times",
            ],
      },
      {
        numb: 2,
        question: "Your fitness routine includes:", 
        question_desc: "Select all that apply.",
        options: [
            "Reistance",
            "High-intensity", 
            "Endurance",
            "None of these",
            ],
      },
      {
        numb: 3,
        question: "When it comes to exercise, you care most about:",
        question_desc: "", 
        options: [
            "Performance",
            "Breaking a sweat", 
            "Muscle toning",
            "Muscle building",
            "General health"
            ],
      },
      {
        numb: 4,
        question: "Are you looking for support with any of the following?",
        question_desc: "", 
        options: [
            "Muscle recovery",
            "Muscle cramping", 
            "Hydration",
            "Joints",
            "None"
            ],
      }
      
    ],

    brain: [
        {
          numb: 1,
          question: "Do you sometimes have trouble focusing or concentrating on specific tasks?",
          question_desc: "",
          options: ["Yes", 
                    "No"],
        },
        {
          numb: 2,  //Modified 
          question: "Do you sometimes experience brain fog or lack of mental clarity?",
          question_desc: "",
          options: ["Yes", 
                    "No"],
        },
        {
          numb: 3,
          question: "Do you want help with your short-term memorry?",
          question_desc: "You find yourself forgetting small things like the name of a movie you saw last week",
          options: ["Yes", 
                    "No"],
        },
    ],

    energy: [
        {
          numb: 1,
          question: "Do you sometimes have trouble falling asleep?",
          question_desc: "",
          options: ["Yes", 
                    "No"],
        },
        {
          numb: 2,
          question: "Do you sometimes have trouble stayinig asleep?",
          question_desc: "",
          options: ["Yes", 
                    "No"],
        },
        {
          numb: 3,
          question: "Do you sometimes feel an afternoon energy slump?",
          question_desc: "",
          options: ["Yes", 
                    "No"],
        },
        {
          numb: 4,
          question: "How do you feel at the end of a stressful day?",
          question_desc: "",
          options: ["Worked up", 
                    "Drained"],
        },
        {
          numb: 5,
          question: "In an average week, how often do you feel burned out?",
          question_desc: "Tired, drained, or overextended",
          options: ["Rarely", 
                    "Two to three days",
                    "Every day"],
        },
        
    ],
   
    digestion: [
        {
          numb: 1,
          question: "Which best describes your bowel movements, usually?",
          question_desc: "",
          options: ["Less than once a day", 
                    "About once a day",
                    "More than once a day",
                    "Irregular"
                  ],
        },
        {
          numb: 2,
          question: "Do you regularly experience any of the following?",
          question_desc: "More than three times per week",
          options: ["Gas", 
                    "Bloating",
                    "Burping",
                    "Indigestion",
                    "None"
                  ],
        },

    ],

    hairSkinNails: [
        {
          numb: 1,
          question: "How does your skin feel generally?",
          question_desc: "",
          options: ["Dry", 
                    "Oily", 
                    "Uneven",
                    "Dull",
                    "Pretty good"
                  ],
        },
        {
          numb: 2,
          question: "What are your skin conerns?",
          question_desc: "",
          options: ["Breakouts", 
                    "Hyperpigmentation", 
                    "Wrinkles",
                    "Elasticity",
                    "General aging",
                    "None"
                  ],
        },
        {
          numb: 3,
          question: "Do you have dry skin on your body?",
          question_desc: "",
          options: ["Yes", 
                    "No" 
                  ],
        },
        {
          numb: 4,
          question: "Not including acne, do you experience any skin conditions?",
          question_desc: "",
          options: ["Yes",
                    "No"
                  ]
        },
        {
          numb: 5,
          question: "Do you live in a city or industrial area?",
          question_desc: "",
          options: ["Yes",
                    "No"
                  ]
        },
        {
          numb: 6,
          question: "Your hair is:",
          question_desc: "",
          options: ["Starting to thin",
                    "Dry",
                    "Damaged",
                    "Growing slowly",
                    "None of these"
                  ]
        },
        {
          numb: 7,
          question: "You're looking to improve your nail:",
          question_desc: "",
          options: ["Strength",
                    "Growth",
                    "Condition",
                    "None of these",
                  ]
        }

    ],

    immunity: [
        {
          numb: 1,
          question: "Are you often around people who might have immune sensitivities?",
          question_desc: "Like children or the elderly",
          options: ["Yes", "No"],
        },
        {
          numb: 2,
          question: "Do you take public transportation regularly?",
          question_desc: "",
          options: ["Yes", "No"],
        },
        {
          numb: 3,
          question: "Do you see a doctor for any ongoing health conditions?",
          question_desc: "You may be susceptible to immune challenges",
          options: ["Yes", "No"],
        },
        {
          numb: 4,
          question: "Do you experience seasonal sinus or lung issues?",
          question_desc: "",
          options: ["Yes", "No"],
        },
        {
          numb: 5,
          question: "Have you used antibiotics more than 5 times in your life?",
          question_desc: "",
          options: ["Yes", "No"],
        },
    ],

    // Add more categories and their respective questions
  };

  const lifestyleQuestions = [
    {
        numb: 1,
        question: "When it comes to living a healthy lifestyle, you are:",
        question_desc: "",
        options: [
            "Really dedicated",
            "On a kick right now",
            "Ready to get started"
        ]
    },
    {
        numb: 2,
        question: "On an average day, you eat fruit:",
        question_desc: "Like a medium apple, a banana, or ½ cup berries",
        options: [
            "Rarely",
            "Once or twice",
            "Three or more times"
        ]
    },
    {
        numb: 3,
        question: "On an average day, you eat vegetables:",
        question_desc: "Like ½ cooked vegetables or one cup raw vegetables",
        options: [
            "Rarely",
            "Once or twice",
            "Three or more times"
        ]
    },
    {
        numb: 4,
        question: "On an average day, you eat dairy:", 
        question_desc: "Like milk, yogurt, and cheese",
        options: [
            "Rarely",
            "Once or twice",
            "Three or more times"
        ]
    },
    {
        numb: 5,
        question: "On an average day, you eat high fiber foods:",
        question_desc: "Like grains, seeds, beans, green vegetables, berries",
        options: [
            "Rarely",
            "Once or twice",
            "Three or more times"
        ]
    },
    {
        numb: 6,
        question: "On an average day, you eat fermented foods:",
        question_desc: "Like, yogurt, kimchi, sauerkarut, and kombucha.",
        options: [
            "Rarely",
            "Once or twice",
            "Three or more times"
          ]
    },
    {
        numb: 7,
        question: "On an average day, you eat protein:",
        question_desc: "Like eggs, meat, beans, and tofu.",
        options: [
            "Rarely",
            "Once or twice",
            "Three or more times"
          ]
    },
    
    {
      numb: 8,
      question: "On an average day, you eat meat:",
      question_desc: "This doesn’t include fish or seafood.",
      options: [
          "Never",
          "Once or twice",
          "Three or more times"
        ]
    },
    {
      numb: 9,
      question: "On an average day, you eat fatty fish:",
      question_desc: "Like salmon, sardines, or anchovies.",
      options: [
          "Never",
          "Once or twice",
          "Three or more times"
        ]
    },
    {
      numb: 10,
      question: "Do you often consume 15 or more alcoholic drinks in a week?",
      question_desc: "",
      options: [
          "Yes",
          "No",
        ]
    },
    {
      numb: 11,
      question: "How would you describe your diet?",
      question_desc: "",
      options: [
          "Prefer plant-based",
          "Vegetarian",
          "Vegan",
          "Anything goes"
        ]
    },
    {
      numb: 12,
      question: "Do you have any other diet preferences or restrictions",
      question_desc: "Select all that apply.",
      options: [
          "Limiting dairy",
          "Limiting gluten",
          "Celiac",
          "Paleo",
          "None"
        ]
    },
    {
      numb: 13,
      question: "Are you trying to snack less throughout the day?",
      question_desc: "Midnight snacks, elevenses, fourth meal, etc.",
      options: [
          "Yes",
          "No",
        ]
    },
    {
      numb: 14,
      question: "Do you often get really thirsty?",
      question_desc: "",
      options: [
          "Yes",
          "No",
        ]
    },
    {
      numb: 15,
      question: "Do you smoke?",
      question_desc: "",
      options: [
          "Yes",
          "No",
        ]
    },
    {
      numb: 16,
      question: "Has your doctor recommended you get more of the following?",
      question_desc: "Select all that apply.",
      options: [
          "Iron",
          "Vitamin D",
          "None"
        ]
    },
  ]

export { lifestyleQuestions, specializedQuestionSets };


  