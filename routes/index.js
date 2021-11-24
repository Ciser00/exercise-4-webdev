const express = require('express');
//Middle ware to alllow for routing on the node server
const router = express.Router();
//Require firestore
const firestore = require('firebase/firestore/lite');
//Initililize firestore database
const db = firestore.getFirestore();

router.get("/", (req, res) => {
  const blogposts = firestore.getDocs(
    firestore.collection(db, "blogposts")
  );
  const blogpostsArray = [];
  blogposts
    .then((response) => {
      response.forEach((doc) =>{
        //push document into array every time the query loops over
        blogpostsArray.push(doc.data());
      });
      return res.send(blogpostsArray);
    })
    .catch(function(error){
      console.log("Error:", error);
      return res.send(error);
    });
});

module.exports = router;
