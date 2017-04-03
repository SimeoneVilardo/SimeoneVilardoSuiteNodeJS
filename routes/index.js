var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
    res.render(req.viewName, { title: 'Home', partialView: req.partialView });
});

router.get('/login', function(req, res, next) {
    res.render(req.viewName, { title: 'Login', partialView: req.partialView });
});

module.exports = router;
