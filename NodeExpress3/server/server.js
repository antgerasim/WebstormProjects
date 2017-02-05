/**
 * Created by Fenchelteefee on 23.07.2016.
 */

var express = require('express');
var app = express();
var cors = require("cors");
//var path = require('path');

app.use(cors());

app.get('/', function (req, res) {
    res.send('Ficken?');
});

/*app.get('/', function (req, res) {
    res.sendfile(path.join(__dirname + '/../public'))
});*/
//https://scotch.io/tutorials/use-expressjs-to-deliver-html-files

app.listen(3000, function () {
    console.log('Don app is listening on port 3000!');
});

app.use(express.static('../public'));//https://expressjs.com/en/starter/static-files.html

//stop server ctrl + c


//https://expressjs.com/en/starter/hello-world.html