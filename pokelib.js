
var _ = require('lodash')
var POKE_PHOTO_BASE_URL = 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/' // + 490.png

var pokelib = {
  parseInfo: function (pokeResponse) {
    var pokeInfo = {
      name: pokeResponse.name,
      number: pokeResponse.id,
      weight: pokeResponse.weight,
      height: pokeResponse.height,
      types: [],
      stats: [],
      imageUrl: ''
    }

    // Joining Types
    var types = []
    for (var i in pokeResponse.types) {
      var type = pokeResponse.types[i].type
      types.push(type.name)
    }
    pokeInfo.types = _.join(types, ', ')

    // Joining Stats
    var stats = []
    for (var i in pokeResponse.stats) {
      var stat = pokeResponse.stats[i]
      var newStat = {name: stat.stat.name, value: stat.stat.base_stat}
      stats.push(newStat)
    }

    pokeInfo.stats = _.join(stats, ', ')
    pokeInfo.imageUrl = POKE_PHOTO_BASE_URL + this.pad(pokeInfo.number, 3) + '.png'

    return pokeInfo
  },
  pad: function (n, length) {
    // to force a number to x digits length
    var len = length - ('' + n).length
    return (len > 0 ? new Array(++len).join('0') : '') + n
  }
}

module.exports = pokelib
