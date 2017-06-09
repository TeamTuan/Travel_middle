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
router.get('/save_introduction', function(req, res, next) {
    var id=req.query.id;
    var value=req.query.value;
    console.log (value);
    request.get('http://127.0.0.1/Travel_hou/user/save_introduction?id='+id+'&value='+value, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    });

});
router.get('/save_name', function(req, res, next) {
    var id=req.query.id;
    var value=req.query.value;
    console.log (value);
    request.get('http://127.0.0.1/Travel_hou/user/save_name?id='+id+'&value='+value, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    });

});
router.get('/save_sex', function(req, res, next) {
    var id=req.query.id;
    var value=req.query.value;
    console.log (value);
    request.get('http://127.0.0.1/Travel_hou/user/save_sex?id='+id+'&value='+value, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    });

});



router.get('/check_tel', function(req, res, next) {
    var value=req.query.value;
    console.log (value);
    request.get('http://127.0.0.1/Travel_hou/user/check_tel?value='+value, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    });

});



router.get('/insert_user', function(req, res, next) {
    var tel=req.query.tel;
    var password=req.query.password;
    request.get('http://127.0.0.1/Travel_hou/user/insert_user?tel='+tel+"&password="+password, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    });

});
module.exports = router;
