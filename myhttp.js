var http = require('http');
var url = process.argv[2];

function listDataEvents(url,callback){
    http.get(url,function stream(response){
	response.setEncoding('utf-8');
	response.on('data',function(data){
	    console.log(data);
	});
	response.on('error',function(error){
	    console.log(error);
	});
    });
}

listDataEvents(url,function(stuff){return stuff});
