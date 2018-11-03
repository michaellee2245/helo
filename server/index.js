require ('dotenv').config();

const express = require ('express');
const bodyParser = require ('body-parser');
const massive = require ('massive');

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(bodyParser.json());


app.listen(SERVER_PORT, () => {
    console.log(`Server connected and running on port ${SERVER_PORT}`);
})