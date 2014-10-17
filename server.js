var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
	fs.readFile('data.txt', function readData(err, data){
  		res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end(data);
	});
 }).listen(9000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:9000/');