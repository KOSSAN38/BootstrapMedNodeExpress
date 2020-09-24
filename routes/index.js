const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'SUPERsida' });
});
router.get('/boot', function (req, res, next) {
  res.render('boot', { title: 'SUPERsida' });
});
module.exports = router;
