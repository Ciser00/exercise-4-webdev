const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
  res.send(`
    <h1> All Articles </h1>
    <p> more coming soong </p>

    `)
});

module.exports = router;
