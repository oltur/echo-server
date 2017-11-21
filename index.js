'use strict';

const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

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

app.listen(port, () => console.log('Example app listening on port '+ port +'!'))