var http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

http.createServer(function(req,res){
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Eduonix simple server reporting for duty');
}).listen(port, hostname, function(){
    console.log('Eduonix project uno alive and running at http://localhost:3000');
});