const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
  res.send(`
    <h1> Individual posts </h1>
    <form>
      <div>
        <label for="articleTitle">Article Title </label>
        <input type="text" name="article-title" placeholder="type article title"/>
      </div>
      <button type="submit"> submit </button>
    </form>
    `)
});

module.exports = router;
