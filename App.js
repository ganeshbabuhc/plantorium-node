const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const fetch = require('node-fetch');

(async () => {
 
})();
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/plants', (req, res) =>{
    fetch('https://trefle.io/api/v1/plants?token=NTl2czlzZHhXY01vejdET3ljR3ViUT09').then(response => response.json())
    .then(data => {
      console.log(data);
      res.json(data);
    });
  })
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));