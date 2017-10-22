var request = require('request');
// request('http://127.0.0.1:3000', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the baidu homepage.
//   }
// })

request({
    url: 'http://127.0.0.1:3000',
    method: "POST",
    json: true,
    headers: {
        "content-type": "application/json",
    },
    body: JSON.stringify({
        name: 'liuyawin',
        age: '22'
    })
}, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
});