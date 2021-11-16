const express = require('express')
const app = express();
const port = process.env.PORT || 4000;

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
