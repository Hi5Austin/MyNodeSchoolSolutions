var fs = require('fs');
var f = fs.readFileSync(process.argv[2],'utf-8');
var total = 0;
for(var i = 0; i < f.length; i ++){
    if(f[i] == '\n'){
        total += 1;
    }
} 
console.log(total);

