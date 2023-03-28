const index = function(req, res, next) {
    res.render('index', { title: 'Express' });
}

const msgSend = function(req, res, next){
    res.status(200).send('message sent!');
    console.log(req.body);
}

  module.exports = {
    index,
    msgSend
  }