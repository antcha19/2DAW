var http = require('http');
var dt = require('./mifecha');

var url = require("url");
var fs = require('fs');
http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  var q = url.parse(req.url,true).query;
  //http://localhost:8088/?id=90
  res.write("la id es: "+ q.id);

  res.write('DFG gfgh' + dt.myDateTime());
  res.write("url dfdfdfddfsdgdfjghk  "+req.url);


  fs.readFile('demofile1.html', function(err, data) {
    
    res.write(data);
    return res.end();
  });
}).listen(8088);