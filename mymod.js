var fs = require('fs');
module.exports = function listdir(path,ext,callback){
    fs.readdir(path, function done(err,list){
       if(err){
            return callback(err);
            console.log('error');
       }
       else { 
           for(var i = 0; i < list.length; i++){
                var check = "." + ext;
                if(list[i].indexOf(check) != -1){
                    console.log(list[i]);
                }
            }
       }
    });
}
