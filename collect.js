var http = require('http');
var url = process.argv[2];
var dataList = ""
function parseData(){
    console.log(dataList.length);
    console.log(dataList);
}
function listDataEvents(url,callback){
    http.get(url,function stream(response){
	response.setEncoding('utf-8');
	response.on('data',function(data){
	    dataList += data;
	});
	response.on('error',console.error);
	response.on('end',parseData);
    });
}

listDataEvents(url,function(stuff){return stuff});
