
// pokeserver.js
var express = require('express')
var _ = require('lodash')
var bodyParser = require('body-parser')
var rp = require('request-promise')
var pokelib = require('./pokelib')

// RouteBASE for PokeAPI
var POKE_BASE_URL = 'http://pokeapi.co/api/v2/'

var app = express()

// Body parser configure
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var port = process.env.PORT || 8080

var router = express.Router()

// Test using => http://localhost:8080/api)
router.get('/', function (req, res) {
  res.json({ message: 'hooray! welcome to our api!' })
})

router.get('/pokemon/:name', function (req, res) {
  console.log('Searching for ' + req.params.name + '...')

  var options = { uri: POKE_BASE_URL + 'pokemon/' + req.params.name, json: true }
  rp(options).then(function (pokeResponse) {
    var pokeInfo = pokelib.parseInfo(pokeResponse)

    var message = {
      'messages': [{
        'attachment': {
          'type': 'image',
          'payload': {
            'url': pokeInfo.imageUrl
          }
        }
      }
      ]}

    console.log('pokeInfo =>', pokeInfo)
    res.json(message)
  }).catch(function (error) {
    var message = {
      'messages': [
         {'text': "Sorry, I couldn't find your pokemon. :( "}
      ]
    }
    res.json(message)
  })
})


app.use('/api', router)
app.listen(port)
console.log('Using Port ' + port)
