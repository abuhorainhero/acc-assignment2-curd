const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json([
    {
      userName: "abuhorain",
      name: "Abu Horain",
      age: 20
    },
    {
      userName: "abuhorain2016",
      name: "Abu",
      age: 21
    }
  ])
});

module.exports = router;
