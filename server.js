var http = require('http'),
    url = require('url');

var {Food} = require('./server/model/Food');

var {mongoose} = require('./server/db/mongoose');

// var {bodyParser} = require('body-parser');

// var server = http.createServer();
http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    var url = req.url;
    // console.log(url);
    if (url === '/add/food') {

        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
            console.log(body);
            var bodyData = JSON.parse(body);

            var food = new Food({
                foodName: bodyData.foodName,
                qty: bodyData.qty
            });
            food.save().then(() => {
                res.end();
            });
        });
        req.on('end', () => {
            res.end('ok');
        });


        //res.write('entered into server.js /add/food route');
        // res.send({msg:'success'});
        // res.status(200).json({msg: 'success'});
        res.end();
    }

    if (url === '/food/list') {
        console.log('here');
        Food.find().then((foods)=>{

            var foodData = JSON.stringify(foods);
            res.send(new Buffer(foods));
            res.end();
        })
        req.on('end', () => {
            res.end('ok');
        });


//res.write('entered into server.js /add/food route');
// res.send({msg:'success'});
// res.status(200).json({msg: 'success'});
        res.end();
    }

}).listen(8000);
console.log("Server listening on port 8000");