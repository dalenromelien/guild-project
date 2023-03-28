const index = function(req, res, next) {
    res.render('index', { title: 'Express' });
}

const msgSend = function(req, res, next){
  res.send({
    "status": 200,
    "message": "your message was received!"
  });

  console.log(JSON.stringify(req.body));
};

  module.exports = {
    index,
    msgSend
  }