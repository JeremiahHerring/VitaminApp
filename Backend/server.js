const mysql2 = require('mysql2') // This is the way to "import for node.js"
const express = require('express') // express is a node.js framework


const connection = mysql2.createConnection({
    host: "localhost",
    database: "vitaminsdb",
    user: "tester",
    password: "test"
})

const app = express() 

const PORT = 5000;
// Declare routes in order to get from url

app.post('/Api/calculateVitamins', (req, res) => {
    const vitamins = req.body;
  
    // Define a function to query the database for vitamin information
    function getVitaminInfo(vitamin) {
      return new Promise((resolve, reject) => {
        connection.query(
          'SELECT * FROM vitamins WHERE name = ?',
          [vitamin],
          (err, results) => {
            if (err) {
              reject(err);
            } else {
              resolve(results);
            }
          }
        );
      });
    }
  
    // Use Promise.all to run the database queries concurrently for each vitamin
    Promise.all(vitamins.map(getVitaminInfo))
      .then(results => {
        // Handle the results from the database queries
        res.json(results);
      })
      .catch(error => {
        console.error('Error:', error);
        res.status(500).send('An error occurred while querying the database.');
      });
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