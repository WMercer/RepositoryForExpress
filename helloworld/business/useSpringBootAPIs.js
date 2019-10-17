var express = require('express');
var app =express();
var bodyParser = require('body-parser');
var rp = require('request-promise-native');
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({extended: true }));

function byFlightNumber(req){
    console.log(req)
    var options  = {
         method: 'POST',
         uri: 'http://localhost:8080/getIntegratedFlightStatusByFlightNumberUseLambda',
         body: req,
         json: true 
    }
    console.log(options)
    rp(options )
    .then(function (parsedBody) {
        console.log(parsedBody)
      return parsedBody.body;
    })
    .catch(function (err) {
        console.log("The calling is failed");
    });
}
function byRoute(){


}
exports.byFlightNumber=byFlightNumber;
exports.byRoute=byRoute;