const express = require('express');
const router = express.Router();
const middleware = require('../middlewares/middlewares');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ massage: 'Hello World' });
});

router.get('/journey', middleware.first, middleware.second, middleware.third);

module.exports = router;
