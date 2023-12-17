var express = require('express');
var router = express.Router();

// const token = process.env.GITHUB_TOKEN;
// const ROOT_URL = 'https://api.github.com';

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const catData = await fetch("https://catfact.ninja/fact")
    .then(res => res.json());
  res.render('cat/fact', { catData, title: 'Cat Facts' });
});

module.exports = router;
