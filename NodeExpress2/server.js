/**
 * Created by Fenchelteefee on 22.07.2016.
 */

var express = require('express');
var app = express();
var cors = require("cors");

app.use(cors());

app.get('/', function (req, res) {
    res.send('Ficken?');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

app.use(express.static('public'));//https://expressjs.com/en/starter/static-files.html

//stop server ctrl + c


//https://expressjs.com/en/starter/hello-world.html