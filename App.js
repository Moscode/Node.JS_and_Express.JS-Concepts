// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./3-names');
const greeting = require('./4-utils')

greeting(names.new_name)
greeting(names.new_name2)
greeting(names.new_name3)