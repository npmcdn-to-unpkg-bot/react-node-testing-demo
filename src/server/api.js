const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('express').Router();

const Message = require('./Message');

router.use(cors());
router.use(bodyParser.json());

const messages = [];

router.get('/messages', (req, res) => {
  return res.send(messages);
});

router.post('/messages', (req, res) => {
  const message = new Message(
      req.body.name,
      req.body.email,
      req.body.message
  );

  messages.push(message);

  res.status(201).send(message);
});

module.exports = router;
