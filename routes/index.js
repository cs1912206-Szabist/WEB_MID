var express = require('express');
const {getTitlesById,getSingleData}= require('../controllers/Titles');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});


router.route('/display/titles').get(getTitlesById);

router.route('/singledata/:title').get(getSingleData);

module.exports = router;
