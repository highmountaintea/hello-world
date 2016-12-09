var express = require('express')
var app = express()
var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/value', function(req, res) {
	res.send('237')
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port)
})