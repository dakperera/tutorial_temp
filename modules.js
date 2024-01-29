//CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./names')
const sayHi = require('./utils')
const data = require('./alternate-flavour')

console.log(data)
require('./mind-grenade')

sayHi('Bill');
sayHi(names.john);
sayHi(names.lisa);