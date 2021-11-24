const express = require('express');

const router = express.Router();

const firestore = require('firebase/firestore');

const db = firestore.getFirestore();

//get a single artcile by ID
//avaible at /artcile/:id
router.get('/:id', (req,res) => {
  const postId = req.params.id;
  const blogpost = firestore.getDoc(
    firestore.doc(db, 'blogposts', postId)
  );

  blogpost
    .then((response) => {
      const post = response.data();
      if(post) return (res.send(post));
      return (res.send("NO DOC"));
    })
    .catch((error) => {
      res.send("no doc sorry ")
    });
});

router.get('/', (req,res) =>{
  res.send(`
    Please include an ID
    `)
});

module.exports = router;
