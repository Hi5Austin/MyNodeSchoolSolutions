var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var dataList = "";
function parseData(){
   // console.log(dataList.length);
    console.log(dataList);
    dataList = "";
    if(num == 1){
        listDataEvents(url2,function(stuff){return stuff});
        num += 1;
    }
    else if(num ==2){
        listDataEvents(url3,function(stuff){return stuff});
        num += 1;
    }
}
num = 1
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

listDataEvents(url1,function(stuff){return stuff});
