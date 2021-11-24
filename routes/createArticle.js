const express = require('express');
const router = express.Router();
const form =`
  <h1> Individual Articles </h1>
  <form action="/create/submit">
    <div style = "
      display:flex;
      flex-direction:column;
      margin-bottom:20px;
      max-width: 325px;
    ">
      <label for="articleTitle">Article Title </label>
      <input
        type="text"
        name="articleTitle"
        placeholder="type article title"
      />

      <label for="articleText">Article Text </label>
      <input
        type="text"
        name="articleText"
        placeholder="type article text"/>

      <label for="author">  Author </label>
      <input
        type="text"
        name="author"
        placeholder="type article author"
      />
    </div>
    <button type="submit"> submit </button>
  </form>
  `;

const firestore = require('firebase/firestore');
const db = firestore.getFirestore();

  //serves web form for users
router.get('/', (req,res) => res.send(form));

//API endpoit for submitting data through form
router.get('/submit', (req,res) =>{
  const queryParams = req.query; //query params from url
  // create ID from itiel

  const title = queryParams.articleTitle;
  const text = queryParams.articleText;
  const author = queryParams.author;
  const idFromTitle = title.replace(/\s+/g, "-").toLowerCase();
  const setBlogPost = firestore.setDoc(firestore.doc(db, "blogposts", idFromTitle),
  {
    title: title,
    text: text,
    author: author,
  }
);
  setBlogPost
  .then((response) =>{
    res.send(`
      <h1> Submission Successful!</h1>
      <p><a href="/create"> Add Another Post </a></p>
    `);
  })
  .catch((error) => {
    console.warn(error);
    res.send(error);
  });
});

module.exports = router;
