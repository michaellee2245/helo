require ('dotenv').config();

const express = require ('express');
const bodyParser = require ('body-parser');
const massive = require ('massive');
const controller = require ('./controller.js')

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance)
    console.log('Database is connected')
})
.catch((error) => console.error('Database connection error', error))

app.use(bodyParser.json());


app.listen(SERVER_PORT, () => {
    console.log(`Server connected and running on port ${SERVER_PORT}`);
})