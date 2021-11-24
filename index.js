//import express
const express = require('express')
//initiate app to express
const app = express();
//set the port - if env.PORT use that otherwiser use 4000
const port = process.env.PORT || 4000;
//Require Firebase
const firebase = require("firebase/app");
//get configuration object so we can comnicate with firebase
const firebaseConfig = {
  apiKey: "AIzaSyB-GQlYXau4jn1XhOAqAb1VD_zDxEQDLQQ",
  authDomain: "exercise-four-c732a.firebaseapp.com",
  projectId: "exercise-four-c732a",
  storageBucket: "exercise-four-c732a.appspot.com",
  messagingSenderId: "25586073752",
  appId: "1:25586073752:web:153edf9819147b787810ed"
};

//intilize firebase

firebase.initializeApp(firebaseConfig);

const indexRoute = require('./routes/index');
const articleRoute = require('./routes/article');
const createArticleRoute = require('./routes/createArticle');


app.use('/', indexRoute);  //home page   app.use (what the name of it is, file location)
app.use('/article', articleRoute); //article page
app.use('/create', createArticleRoute); //create article page

app.listen(port, () => {
  console.log("example");
});


//this tells the browe where to look for each page
