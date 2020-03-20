const express = require("express");
const cors = require("cors");
const monk = require("monk");
const bodyParser = require('body-parser');
const Twit = require('twit')
const randomInt = require('random-int');

const app = express();
var em = 0;

var T = new Twit ({
  consumer_key:         '...',        
  consumer_secret:      '...',
  access_token:         '...',
  access_token_secret:  '...',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Yo'
  });
});

app.get('/tweet', (req, res) => {
  res.json({
    message: 'yello from phlu'
  });
});

app.get('/tweet50', (req, res) => {
  res.json({
    message: 'hello from phlu'
  });
});

app.post('/tweet', (req, res) => {
  T.post('statuses/update', { status: req.body.content.toString() + ' | sent by' + ' phlu ' +  randomInt(10, 1000) + '.' }, function(err, data, response) {
    console.log(data);
  });
});

app.post('/tweet50', (req, res) => {
  em = 0
  while (em < 50) {
    T.post('statuses/update', { status: req.body.content.toString() + ' | sent by' + ' phlu ' +  randomInt(10, 1000) + '.' }, function(err, data, response) {
      console.log(data);
    });
    em++;

  } 
});

app.listen('5000', () => {
  console.log('listening on http://localhost:5000');
});
