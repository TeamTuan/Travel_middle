var express = require('express');
var router = express.Router();
var session = require('express-session');
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/first', function(req, res, next) {
  var result=[];
  request.get('http://127.0.0.1/Travel_hou/blog/index', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      result=body;
      res.json(result);
    }
  });
});

router.get('/login', function(req, res, next) {
  var tel=req.query.tel;
  var password=req.query.password;
  request.get('http://127.0.0.1/Travel_hou/user/index?tel='+tel+"&password="+password,function (error, response, body) {
    if (!error && response.statusCode == 200) {
      req.session.id=body;
      var data={
        "body":body,
        "id":req.session.id
      };
      console.log(data);
      res.json(data);
      
    }
  });
});

router.get('/user_by_id', function(req, res, next) {
  var id=req.query.id;
  request.get('http://127.0.0.1/Travel_hou/user/select_user_by_id?id='+id,function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(body);
    }
  });
});

router.get('/check_login', function(req, res, next) {
 console.log(req.session.id);
});

router.get('/get_blog', function(req, res, next) {

  request.get('http://127.0.0.1/Travel_hou/blog/index', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(body);
    }
  });

});



module.exports = router;
