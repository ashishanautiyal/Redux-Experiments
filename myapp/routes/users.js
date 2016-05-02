var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var user = {};
      user["first"] = "Ashish";
      user["last"] = "Nautiyal";
  res.json(user);
});

module.exports = router;
