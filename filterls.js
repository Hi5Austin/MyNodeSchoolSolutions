var fs = require('fs');
var path = process.argv[2];
var ext = "." + process.argv[3];
function listdir(path,func){
    fs.readdir(path, function doneReading(err, list){
        func(list,ext);
    });
}
function filterList(list,ext){
    for(var i = 0; i < list.length; i++){
        if(list[i].indexOf(ext) != -1){
            console.log(list[i]);
        }
    }
}
listdir(path,filterList);
