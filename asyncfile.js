var fs = require('fs');
function read(path,callback){
    fs.readFile(path,'utf-8',function doneReading(err, contents){
        callback(contents);
    })
}
function countNewLines(buffer){
    var total = 0;
    for(var i = 0; i < buffer.length; i ++){
        if(buffer[i] == '\n'){
            total += 1;
        }
    } 
    console.log(total);
}
read(process.argv[2],countNewLines);
