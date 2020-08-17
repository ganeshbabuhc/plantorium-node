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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.bodyParser());
// app.use(express.json());       // to support JSON-encoded bodies
// app.use(express.urlencoded({     // to support URL-encoded bodies
//   extended: true
// })); // to support URL-encoded bodies
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/index'));
app.get('/cool', (req, res) => res.send(cool()))

app.get('/:api/', (req, res) => {
  console.log(req.params);
  console.log(req.body.page);
  const url = util.getUrl(req.params.api);
  fetch(url).then(response => response.json())
  .then(data => {
    res.json(data);
  });
});


getURL = () =>{
  constants.API_HOST
}


app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
