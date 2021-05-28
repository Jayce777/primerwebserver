const express = require('express');
const hbs = require('hbs');
require('dotenv').config()

const app = express()
const port=process.env.PORT;


hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

// servir contenido estático

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home',{
     nombre:'Jhona',
     titulo:'Node JS curso'

  });
})
 
app.get('/elements', function (req, res) {
    //res.sendFile(__dirname+'/public/elements.html');
    res.render('elements');
  })
  app.get('/generic', function (req, res) {
    //res.sendFile(__dirname+'/public/generic.html');
    res.render('generic');
  })

  app.get('*', function (req, res) {
    res.sendFile(__dirname+'/public/404.html');
  })

  app.listen(port, () => {
    console.log(`App corriendo en el puerto:${port}`)
  })