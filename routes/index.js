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
//chen
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
//chen
router.get('/user_by_id', function(req, res, next) {
  var id=req.query.id;
  request.get('http://127.0.0.1/Travel_hou/user/select_user_by_id?id='+id,function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(body);
    }
  });
});
//chen
router.get('/check_login', function(req, res, next) {
 console.log(req.session.id);
});
//ma
router.get('/get_blog', function(req, res, next) {
    var pages=req.query.pages;
  request.get('http://127.0.0.1/Travel_hou/blog/index?pages='+pages, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(body);
    }
  });

});
//chen
router.get('/save_introduction', function(req, res, next) {
    var id=req.query.id;
    var value=req.query.value;
    request.get('http://127.0.0.1/Travel_hou/user/save_introduction?id='+id+'&value='+value, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(body);
            res.json(body);
        }
    });

});
//chen
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
//chen
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


//chen
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


//chen
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
router.get('/travel_notes', function(req, res, next) {
    var login_id=req.query.login_id;
    request.get('http://127.0.0.1/Travel_hou/blog/travel?login_id='+login_id, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    });

});
router.get('/save_blog', function(req, res, next) {
    var login_id=req.query.id;
    var blog_title= req.query.blog_title;
    var blog_content = req.query.blog_content;
    request.get('http://127.0.0.1/Travel_hou/blog/save_blog?id='+login_id+'&blog_title='+blog_title+'&blog_content='+blog_content, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    });

});
router.get('/publish_blog', function(req, res, next) {
    var login_id=req.query.id;
    request.get('http://127.0.0.1/Travel_hou/blog/publish_blog?id='+login_id, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    });

});
router.get('/publish_scene', function(req, res, next) {
    var scene_id=req.query.id;
    request.get('http://127.0.0.1/Travel_hou/scene/publish_scene?id='+scene_id, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    });

});

router.get('/select_comment_by_scene_id', function(req, res, next) {
    var scene_id=req.query.id;
    request.get('http://127.0.0.1/Travel_hou/scene/select_comment_by_scene_id?id='+scene_id, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    });
});

router.get('/select_reply_by_comment_id', function(req, res, next) {
    var comment_id=req.query.id;
    request.get('http://127.0.0.1/Travel_hou/scene/select_reply_by_comment_id?id='+comment_id, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    });
});

router.get('/update_blog', function(req, res, next) {
    var login_id=req.query.id;
    var blog_title=req.query.blog_title;
    var blog_content=req.query.blog_content;


    request.get('http://127.0.0.1/Travel_hou/blog/update_blog?id='+login_id+'&blog_title='+blog_title+'&blog_content='+blog_content, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    });

});
router.get('/delete_blog', function(req, res, next) {
    var id=req.query.id;

    request.get('http://127.0.0.1/Travel_hou/blog/delete_blog?id='+id, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    });

});
router.get('/get_scene_like', function(req, res, next) {
    var value=req.query.value;

    request.get('http://127.0.0.1/Travel_hou/scene/get_scene_like?value='+value, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    });

});
router.get('/select_name_by_id', function(req, res, next) {
    var from_id=req.query.from_id;
    var to_id=req.query.to_id;
    request.get('http://127.0.0.1/Travel_hou/user/select_name_by_id?from_id='+from_id+'&to_id='+to_id, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    });

});
router.get('/insert_comment', function(req, res, next) {
    var scene_id=req.query.scene_id;
    var user_id=req.query.user_id;
    var value=req.query.value;
    request.get('http://127.0.0.1/Travel_hou/comment/insert_comment?scene_id='+scene_id+'&user_id='+user_id+"&value="+value, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    });

});
router.get('/insert_reply_comment', function(req, res, next) {
    var comment_id=req.query.comment_id;
    var from_id=req.query.from_id;
    var to_id=req.query.to_id;
    var value=req.query.value;
    request.get('http://127.0.0.1/Travel_hou/reply/insert_reply_comment?comment_id='+comment_id+'&from_id='+from_id+"&to_id="+to_id+"&value="+value, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    });

});

router.get('/insert_reply_reply', function(req, res, next) {
    var comment_id=req.query.comment_id;
    var reply_id=req.query.reply_id;
    var user_id=req.query.user_id;
    var to_id=req.query.to_id;
    var value=req.query.value;
    request.get('http://127.0.0.1/Travel_hou/reply/insert_reply_reply?comment_id='+comment_id+'&reply_id='+reply_id+"&user_id="+user_id+"&to_id="+to_id+"&value="+value, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    });

});

module.exports = router;
