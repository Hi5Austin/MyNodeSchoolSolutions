var http = require('http');
var url = require('url');
var timeformat = require('strftime');
var server = http.createServer(function(req,res){
    if(req.method == 'GET'){
        res.writeHead(200,{'Content Type':'application/json'});
	if(url.parse(req.url)['pathname']=='/api/parsetime'){
	    dateStr = url.parse(req.url,true)['query']['iso'];
	    dateObj = new Date(dateStr);
	    resObj = {}
	    resObj['hour'] = dateObj.getHours();
	    resObj['minute'] = dateObj.getMinutes();
	    resObj['second'] = dateObj.getSeconds();
	    res.write(JSON.stringify(resObj));
	    res.end();
        }
	else if(url.parse(req.url)['pathname']=='/api/unixtime'){
	    dateStr = url.parse(req.url,true)['query']['iso'];
            dateObj = new Date(dateStr);
	    resObj = {};
            resObj['unixtime'] = dateObj.getTime();
	    res.write(JSON.stringify(resObj));
	    res.end();
	}
	else{
	    res.write('invalid request');
	    res.end();
	}
    }
})
server.listen(process.argv[2]);
