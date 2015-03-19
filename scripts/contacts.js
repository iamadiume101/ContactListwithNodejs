var http = require('http'), fs = require('fs'), path = require('path');

http.createServer(function (request, response) {

  var resource = request.url.replace('/', '');
  if (!resource) resource = 'contacts';

  var fileName = path.join('app', 'contacts', resource + '.json');

  fs.exists(fileName, function(exists) {
    if (exists) {
      response.writeHead(200, {'Content-Type' : 'application/json',
                               'Access-Control-Allow-Origin' : '*' });
      var fileStream = fs.createReadStream(fileName);
      fileStream.pipe(response);
    }
    else {
      response.writeHead(404, 'Resource Not Found');
      response.end();
    }
  });
}).listen(8001, '127.0.0.1');
console.log('Listening on http://127.0.0.1:8001/:contactId');