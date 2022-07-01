var http =require ('http');

var server = http.createServer(function(req, res) {


 res.write('merhabalar');

 res.end('mesaj bitti');


});

server.listen(8000);
