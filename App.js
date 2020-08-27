const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')

const fetch = require('node-fetch');
const util = require('./utils/util');


const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.json({
  "welcome_to": "plantorium"
}));

app.get('/cool', (req, res) => res.send(cool()))
app.get('/plants*', (req, res) => {
  try {
    console.log('/plants/--');
    const url = util.getUrl(req.url);
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
      res.json(data);
    });
  } catch (error) {
    console.log(error);
  }
});

app.get('/species*', (req, res) => {
  try {
    console.log('/species/--');
    const url = util.getUrl(req.url);
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
      res.json(data);
    });
  } catch (error) {
    console.log(error);
  }
});


app.listen(PORT, () => console.log(`Listening on ${ PORT }`));