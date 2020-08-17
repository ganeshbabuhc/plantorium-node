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
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(express.bodyParser());
// app.use(express.json());       // to support JSON-encoded bodies
// app.use(express.urlencoded({     // to support URL-encoded bodies
//   extended: true
// })); // to support URL-encoded bodies
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.json({
  "welcome_to": "plantorium"
}));
app.get('/cool', (req, res) => res.send(cool()))

app.get('/:api/', (req, res) => {
  // console.log(req.params);
  // console.log(req.body.page);
  try {
    const url = util.getUrl(req.params.api);
    console.log('------url---to fetch data------', url)
    fetch(url).then(response => response.json())
      .then(data => {
        console.log(console.log('------url---------', url));
        res.json(data);
      });
  } catch (error) {
    console.log(error);
  }
});


app.listen(PORT, () => console.log(`Listening on ${ PORT }`));