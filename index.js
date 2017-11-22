'use strict';

const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', (req, res, next) => {
    res.send('Please use POST')
    next();
  }
)

app.post('/', (req, res, next) => {
    const input = req.body;
    console.log(input);
    const output = {input: input, status: 'OK'};
    res.send(output);
    next();
  }
)

app.listen(port, () => console.log('Example app listening on port '+ port))