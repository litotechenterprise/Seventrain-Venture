var express = require('express');
var app = express();
const PORT = process.env.PORT || 8080;

app.get('/', function(req,res) {
    res.status(200).send('Bitch Ass');
});

if(process.env.NODE_ENV == 'production') {
    app.use(express.static('client/build'))

    const path = require('path')
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, function(){
    console.log('Server is runing on PORT:', PORT);
});

