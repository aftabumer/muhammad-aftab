var mysql = require('mysql');
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
app.use(bodyParser.json());
app.use(cors())
const port = 8000

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'park idea',
    port: '3306'
});

connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected");
    } else {
        console.log("Error connecting database", err);
    }
});


//app.get('/', (req, res) => res.send('Hello World!'))

app.post('/signup', (req, res) => {
    let { f_name, l_name, email, password, c_password, } = req.body

    var sql = `INSERT INTO signup (f_name, l_name, email,password,confirm_password) VALUES ('${f_name}', '${l_name}','${email}','${password}','${c_password}')`;
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('Errrrrrrrrrrrrrrrrrrrrrrrrrr', err)
            res.status(500).send(JSON.stringify({ error: err, status: 500 }))
        } else {
            console.log("1 record inserted");
            res.status(200).send({ data: req.body, status: 200 })
        }
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))