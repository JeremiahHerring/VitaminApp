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
    host: "localhost",
    database: "vitaminsdb",
    user: "tester",
    password: "test"
})


const PORT = 3000;
app.post('/Api/calculateVitamins', async (req, res) => {

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
          const vitaminInfo = result.length > 0 ? result[0] : null;
          resolve({[vitamin]: vitaminInfo });
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
});
app.get('/', (req,res) => {
    res.send('Hello there API') // we are going to use postman to create endpoints and testing
})


app.listen(PORT, ()=> {
    console.log(`SERVER    :  http://localhost:${PORT}`);
    connection.connect((err)=> {
        if (err) throw err;
        console.log("DATABASE CONNECTED");
    })
})

app.use("/all", (req, res) => {
    const sql_query = `select Description from vitamins`
    connection.query(sql_query, (err, result)=> {
        if(err) throw err;
        res.send(result);
    })
})