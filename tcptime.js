var net = require('net');
var strf = require('strftime');
function writeDate(){
    var str = strf('%Y-%m-%d %H:%M');
    return str;
}
var server = net.createServer(function (socket) {
    var str = writeDate();
    socket.write(str + '\n');
    socket.end();
});
server.listen(process.argv[2]);
