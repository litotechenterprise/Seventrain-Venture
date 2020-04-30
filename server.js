var express = require('express');
var app = express();
const PORT = process.env.PORT || 8080;

app.get('/', function(req,res) {
    res.status(200).send('Bitch Nigga');
});

app.listen(PORT, function(){
    console.log('Server is runing on PORT:', PORT);
});