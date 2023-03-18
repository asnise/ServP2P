const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/messages', (req, res) => {
  console.log(req.body);
  res.send('Message received');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
