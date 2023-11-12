const mysql2 = require('mysql2') // This is the way to "import for node.js"
const express = require('express') // express is a node.js framework
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express() 
app.use(cors({
  origin: 'http://127.0.0.1:5500', // Adjust this to the actual origin of your frontend
  methods: 'POST',
}))
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
    vitamins = [
      {
          "vitamin": {
              "ID": 1,
              "Vitamin_Name": "A",
              "Description": "Vitamin A, also known as retinol, is a fat-soluble nutrient that plays a vital role in various physiological processes. It is crucial for maintaining the health and proper functioning of the body, but it is more specifically associated with its effects on vision, skin health, and cellular growth and development. Vitamin A is found in a variety of dietary sources, including fruits, vegetables, and animal-based foods.",
              "Benefits_Description": " Vitamin A plays a crucial role in maintaining healthy vision, supporting the immune system, promoting proper cell growth and contributes to healthy skin.",
              "Deficiency_Symptoms": "Night blindness, Dry skin, Susceptibility to infections",
              "Test": "True"
          }
      }
  ]
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