var express = require('express');
const cors = require('cors');
const path = require('path');
var app = express()
var bodyParser = require('body-parser');
// const https = require('https')
// const fs = require('fs')

// const config = {
//     key : fs.readFileSync(__dirname + '/ssl/private.key'),
//     cert: fs.readFileSync(__dirname + '/ssl/certificate.crt'),
// }

const port = 48000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
app.use(express.static(path.join(__dirname,"www")))
// app.use(express.static(__dirname+ '/public'));

// app.set('views', __dirname + '.');

// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);
// app.use(express.static('static'));



// https.createServer(config,app).listen(port, function() {
//     console.log("start!");
// })

app.listen(port,function(){
    console.log('localhost:',port,"start");
});

app.all('/*', function(req,res) {
    res.sendFile(__dirname +"/www/index.html")
})

// app.get('*', function(req,res) {
    
//     res.redirect('/');
//     // res.render('/views/index.html',{title: 'Hey'});
// })

