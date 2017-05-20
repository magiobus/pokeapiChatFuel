# pokeapi
Pokemon API Server for use with ChatFuel, using data from https://pokeapi.co

*GET Example:*
```sh 
api/pokemon/:pokemonName
```



*Response Example:*
```sh
{"
  messages":[{
    "attachment":{
      "type":"image","payload":{"url":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"}}},
      {"text":"pikachu tiene el numero 25"},
      {"text":"tiene un peso de 6 kgs y una altura de 0.4 mts ,"},
      {"text":"es un pokemon de tipo: electric, "},
      {"text":"algunas de sus estadisticas: \nspeed: 90\n special-defense: 50\n special-attack: 50\n defense: 40\n attack: 55\n hp: 35"}
      ]}
```

## Running Locally
```sh
$ node index.js
```
