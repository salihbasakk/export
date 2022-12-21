const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const excelRoute = require('./routes/excel');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(excelRoute);

app.listen(3000);

