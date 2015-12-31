var fs = require('fs');
var mymodule = require('./mymod.js')
mymodule(process.argv[2],process.argv[3],function hello(stuff){return stuff});
