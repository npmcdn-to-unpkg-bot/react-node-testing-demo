const path = require('path');
const express = require('express');
const app = express();

const Message = require('./Message');

const port = 8392;

app.use('/api', require('./api'));
app.use('/', require('./webapp'));

app.listen(port, err => {
  if (err) {
    throw new Error(err);
  }

  console.log('Listening on http://localhost:' + port);
});
