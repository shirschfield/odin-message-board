const express = require('express');
const router = express.Router();

// Messages array as specified in the assignment
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

/* GET new message form. */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New Message' });
});

/* POST new message. */
router.post('/new', function(req, res, next) {
  const { messageText, messageUser } = req.body;
  
  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date()
  });
  
  res.redirect('/');
});

module.exports = router;
