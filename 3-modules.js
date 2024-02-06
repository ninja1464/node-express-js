// modules

const name = require("./4-names"); // or could be written as const {john, peter} = require('./4-names')
const sayhi = require("./5-utlis");
const person = require("./6-alternative-flavour");
require("./7-mind-grenade"); // this only works when  function inside require already benn called
console.log(person);
sayhi("susan");
sayhi(name.john); // sayhi(john)
sayhi(name.peter); // sayhi(peter)
