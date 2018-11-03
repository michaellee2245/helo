require ('dotenv').config();

const express = require ('express');
const bodyParser = require ('body-parser');
const massive = require ('massive');
const controller = require ('./controller.js');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors')

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance)
    console.log('Database is connected')
})
.catch((error) => console.error('Database connection error', error))

app.use(cors());
app.use(bodyParser.json());

app.post('/new_user', (req, res) => {
    const db = req.app.get('db')
    const { username, password } = req.body

    bcrypt.hash(password, null, null, (err, hash) => {
        if (err){
            return res.send('An error occurred while hashing.')
        }
        db.new_user([username, hash])
        .then(() => {
            res.status(200).send('User created successfully.')
        })
        .catch((error) => {
            res.status(500).send(error)
        })
    })

})

app.listen(SERVER_PORT, () => {
    console.log(`Server connected and running on port ${SERVER_PORT}`);
})