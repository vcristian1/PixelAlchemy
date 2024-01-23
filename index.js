const path = require('path')
const express = require('express');
const dotenv =  require('dotenv').config();
const { generateImage } = require('./controllers/openaiController')
const port = process.env.PORT || 5000
const app = express();

//Middleware app.use

///Enable body parser, so we can parse the request.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))
app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => console.log(`Server started on Port:${port}`))