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