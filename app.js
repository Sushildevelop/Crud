require('dotenv').config();
const express = require('express');
const cors = require("cors")

const connectToDb = require('./config/db.js');

const app = express();

// Express Middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.use(cors())



const userRoutes = require('./routes/userRoutes.js')

// init connection to db
connectToDb()

app.use('/', userRoutes)

module.exports = app;