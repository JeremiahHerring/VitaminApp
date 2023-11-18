const mysql2 = require('mysql2') // This is the way to "import for node.js"
const express = require('express') // express is a node.js framework
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express() 
app.use(cors())
app.use(bodyParser.json())


const connection = mysql2.createConnection({
    host: "localhos",
    database: "vitaminsdb",
    user: "tester",
    password: "test"
})


const PORT = 3000;
let testing = false; // This will define whether we are in testing mode or not
app.post('/Api/calculateVitamins', async (req, res) => {
  if (testing === true)
  {
    let vitaminpackage = req.body
    let vitamins = []
    if (vitaminpackage.length === 1){
       vitamins = [
        {
          "vitamin": {
              "ID": 1,
              "Vitamin_Name": "A",
              "Sources": "Sweet potatoes, carrots, spinach, kale, apricots, eggs, liver.",
              "Benefits_Description": " Vitamin A plays a crucial role in maintaining healthy vision, supporting the immune system, promoting proper cell growth and contributes to healthy skin.",
              "Deficiency_Symptoms": "Night blindness, Dry skin, Susceptibility to infections"
          }
      }
      ]
    }
    if (vitaminpackage.length === 2){
      vitamins = [
        {
          "vitamin": {
              "ID": 1,
              "Vitamin_Name": "A",
              "Sources": "Sweet potatoes, carrots, spinach, kale, apricots, eggs, liver.",
              "Benefits_Description": " Vitamin A plays a crucial role in maintaining healthy vision, supporting the immune system, promoting proper cell growth and contributes to healthy skin.",
              "Deficiency_Symptoms": "Night blindness, Dry skin, Susceptibility to infections"
          }
      },
      {
          "vitamin": {
              "ID": 6,
              "Vitamin_Name": "B6",
              "Sources": "Poultry, fish, potatoes, bananas, fortified cereals, nuts.",
              "Benefits_Description": "Pyridoxine(B6) is involved in amino acid metabolism, neurotransmitter synthesis, and the formation of red blood cells. It plays a crucial role in brain development and function.",
              "Deficiency_Symptoms": "Anemia, depression, confusion."
          }
      }
      ]
    }
    if (vitaminpackage.length === 3){
      vitamins = [
        {
          "vitamin": {
              "ID": 1,
              "Vitamin_Name": "A",
              "Sources": "Sweet potatoes, carrots, spinach, kale, apricots, eggs, liver.",
              "Benefits_Description": " Vitamin A plays a crucial role in maintaining healthy vision, supporting the immune system, promoting proper cell growth and contributes to healthy skin.",
              "Deficiency_Symptoms": "Night blindness, Dry skin, Susceptibility to infections"
          }
      },
      {
          "vitamin": {
              "ID": 6,
              "Vitamin_Name": "B6",
              "Sources": "Poultry, fish, potatoes, bananas, fortified cereals, nuts.",
              "Benefits_Description": "Pyridoxine(B6) is involved in amino acid metabolism, neurotransmitter synthesis, and the formation of red blood cells. It plays a crucial role in brain development and function.",
              "Deficiency_Symptoms": "Anemia, depression, confusion."
          }
      },
      {
          "vitamin": {
              "ID": 11,
              "Vitamin_Name": "D",
              "Sources": "Fatty fish (salmon, mackerel), fortified dairy products, eggs, sunlight.",
              "Benefits_Description": "Calciferol(D) is essential for calcium absorption, supporting bone health and immune system function. It plays a crucial role in maintaining overall skeletal health and preventing conditions like rickets.",
              "Deficiency_Symptoms": "Bone pain, muscle weakness"
          }
      }
      ]
    }
    if (vitaminpackage.length === 4){
      vitamins = [
        {
          "vitamin": {
              "ID": 1,
              "Vitamin_Name": "A",
              "Sources": "Sweet potatoes, carrots, spinach, kale, apricots, eggs, liver.",
              "Benefits_Description": " Vitamin A plays a crucial role in maintaining healthy vision, supporting the immune system, promoting proper cell growth and contributes to healthy skin.",
              "Deficiency_Symptoms": "Night blindness, Dry skin, Susceptibility to infections"
          }
      },
      {
          "vitamin": {
              "ID": 6,
              "Vitamin_Name": "B6",
              "Sources": "Poultry, fish, potatoes, bananas, fortified cereals, nuts.",
              "Benefits_Description": "Pyridoxine(B6) is involved in amino acid metabolism, neurotransmitter synthesis, and the formation of red blood cells. It plays a crucial role in brain development and function.",
              "Deficiency_Symptoms": "Anemia, depression, confusion."
          }
      },
      {
          "vitamin": {
              "ID": 11,
              "Vitamin_Name": "D",
              "Sources": "Fatty fish (salmon, mackerel), fortified dairy products, eggs, sunlight.",
              "Benefits_Description": "Calciferol(D) is essential for calcium absorption, supporting bone health and immune system function. It plays a crucial role in maintaining overall skeletal health and preventing conditions like rickets.",
              "Deficiency_Symptoms": "Bone pain, muscle weakness"
          }
      },
      {
          "vitamin": {
              "ID": 9,
              "Vitamin_Name": "B12",
              "Sources": "Meat, fish, dairy products, eggs, fortified cereals.",
              "Benefits_Description": "Cobalamin(B12) is critical for red blood cell formation, neurological function, and DNA synthesis. It plays a key role in maintaining healthy nerve cells and preventing certain types of anemia.",
              "Deficiency_Symptoms": "Megaloblastic anemia, fatigue, weakness, neurological issues."
          }
      }
      ]
    }
    if (vitaminpackage.length >= 5){
      vitamins = [
      {
        "vitamin": {
            "ID": 1,
            "Vitamin_Name": "A",
            "Sources": "Sweet potatoes, carrots, spinach, kale, apricots, eggs, liver.",
            "Benefits_Description": " Vitamin A plays a crucial role in maintaining healthy vision, supporting the immune system, promoting proper cell growth and contributes to healthy skin.",
            "Deficiency_Symptoms": "Night blindness, Dry skin, Susceptibility to infections"
        }
    },
    {
        "vitamin": {
            "ID": 6,
            "Vitamin_Name": "B6",
            "Sources": "Poultry, fish, potatoes, bananas, fortified cereals, nuts.",
            "Benefits_Description": "Pyridoxine(B6) is involved in amino acid metabolism, neurotransmitter synthesis, and the formation of red blood cells. It plays a crucial role in brain development and function.",
            "Deficiency_Symptoms": "Anemia, depression, confusion."
        }
    },
    {
        "vitamin": {
            "ID": 11,
            "Vitamin_Name": "D",
            "Sources": "Fatty fish (salmon, mackerel), fortified dairy products, eggs, sunlight.",
            "Benefits_Description": "Calciferol(D) is essential for calcium absorption, supporting bone health and immune system function. It plays a crucial role in maintaining overall skeletal health and preventing conditions like rickets.",
            "Deficiency_Symptoms": "Bone pain, muscle weakness"
        }
    },
    {
        "vitamin": {
            "ID": 9,
            "Vitamin_Name": "B12",
            "Sources": "Meat, fish, dairy products, eggs, fortified cereals.",
            "Benefits_Description": "Cobalamin(B12) is critical for red blood cell formation, neurological function, and DNA synthesis. It plays a key role in maintaining healthy nerve cells and preventing certain types of anemia.",
            "Deficiency_Symptoms": "Megaloblastic anemia, fatigue, weakness, neurological issues."
        }
    },
    {
        "vitamin": {
            "ID": 13,
            "Vitamin_Name": "K",
            "Sources": "Leafy green vegetables (kale, spinach), broccoli, Brussels sprouts, green beans.",
            "Benefits_Description": "Phylloquinone(K) is essential for blood clotting and bone metabolism. It supports the synthesis of proteins involved in these processes, helping prevent excessive bleeding and promoting optimal bone health.",
            "Deficiency_Symptoms": "Excessive bleeding, easy bruising, bleeding gums."
        }
    }
  
  ]
}
  res.json(vitamins)
}
  else {
  let vitamins = req.body
  if (vitamins.length === 0) {
    console.log("Empty Array") 
    return res.status(400).send('Invalid request: "Vitamins should be an array with elements');
  }

  console.log("Api is handling a request");

  const queryPromises = vitamins.map(vitamin => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM vitamins WHERE Vitamin_Name = ?", [vitamin], (err, result) => {
        if (err) {
          reject(err);
        } else {
          const vitamin = result.length > 0 ? result[0] : null;
          resolve({vitamin});
          }
      });
    });
  });

  try {
    const results = await Promise.all(queryPromises);
    console.log("We sendin sumn");
    res.json(results);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred while querying the database.');
  }
}}/*<--- This is the testing === true else{} */);

app.get('/', (req,res) => {
    res.send('Hello there API') // we are going to use postman to create endpoints and testing
})


app.listen(PORT, ()=> {
    console.log(`SERVER    :  http://localhost:${PORT}`);
    connection.connect((err)=> {
        if (err){
          console.log("No database connected, TESTING MODE")
          testing = true
        }
        else {
        console.log("DATABASE CONNECTED");
        }
    })
})

app.use("/all", (req, res) => {
    const sql_query = `select Description from vitamins`
    connection.query(sql_query, (err, result)=> {
        if(err) throw err;
        res.send(result);
    })
})