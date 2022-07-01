

const fs =require('fs');

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn)

const textOut = 'this: .' + textIn + Date.now() ;
fs.writeFileSync('./txt/output.txt' ,textOut);
console.log('its ok')
const hello ="hello world";
console.log(hello);

var http =require ('http');

var server = http.createServer(function(req, res) {


 res.write('merhabalar');

 res.end(textOut);


});

server.listen(8000);
