require('dotenv').config();

const express = require('express');
const passport = require('passport');
const cors = require('cors');

const app = express();

// To solve CORS error
app.use(cors());

// To parse the Request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// To make public folder accessible by all users
app.use(express.static('public'));

require('./src/auth');

app.use(passport.initialize());
app.use(passport.session());

const root = require('./src/routes/root');
const login = require('./src/routes/login');
const signup = require('./src/routes/signup');
const gallery = require('./src/routes/gallery');

const galleryCreate = require('./src/routes/gallery/create');
const galleryEdit = require('./src/routes/gallery/edit');
const galleryDelete = require('./src/routes/gallery/delete');

// App routes
app.use([
  root, login, signup, gallery,
  galleryCreate, galleryEdit, galleryDelete
]);

console.log("Running on port " + process.env.PORT);
app.listen(process.env.PORT);