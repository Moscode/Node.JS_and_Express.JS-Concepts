// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./3-names');
const greeting = require('./4-utils')
const data = require('./5-alternative-flavor-export')
require('./6-module-exec-itself');

//greeting(names.new_name)
//greeting(names.new_name2)
//greeting(names.new_name3)

//console.log(data)

// console.log(module) - helps you understand where the export is from and some other stuff