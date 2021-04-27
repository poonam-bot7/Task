// Importing
const path = require('path');
const express = require('express');


const app = express();

// Allows us to set any values globally on our express application
// Template engine
app.set('view engine', 'ejs');
// Where to find dynamic templates
app.set('views', 'views');

// For serving static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000);