var express = require('express');
var router = express.Router();
const {models} = require('./../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET credits page. */
router.get('/credits', function(req, res, next) {
    res.render('credits', { title: 'Practica realizada por Juan.' });
});

/* GET quizzes page. */
router.get('/quizzes', function(req, res, next) {
    models.quiz.findAll()
        .then(quizzes => {
          var quizzesJson=JSON.stringify(quizzes);
          res.render('quizzes', { quizzesJson : quizzesJson });
        })
        .catch(error => {
            console.log(error);
        })


});

module.exports = router;
