var http = require('http');

var server = http.createServer(function (req, res) {
    console.log(req.method)
    if (req.method == 'GET') {
        res.end('GET Success...');
    } else if (req.method == 'POST') {
        var data = '';
        req.on('data', function (chunk) {
            data = chunk;
        })

        req.on('end', function () {
            console.log(data)
            res.end(data);
        })

    }
});

server.listen('3000', function () {
    console.log('Listening on port 3000...');
})