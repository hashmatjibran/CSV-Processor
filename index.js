const express = require('express');



const router = express.Router();


const port = 8000;
const expressLayouts = require('express-ejs-layouts');

const path = require('path');
const app = express();

app.use(express.static('./Assets'));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.set('layout extractScripts', true)
app.set('layout extractStyles', true)


app.use(expressLayouts);
app.use('/', require('./Routes/web'));


  app.listen(port, function () {
    console.log('Express server listening on ', port);
  });

