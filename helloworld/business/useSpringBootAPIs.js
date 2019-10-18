var express = require('express');
var app =express();
var bodyParser = require('body-parser');
var rp = require('request-promise-native');
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({extended: true }));

function byFlightNumber(req,res){
   
    var options  = {
         method: 'POST',
         uri: 'http://localhost:8080/getIntegratedFlightStatusByFlightNumberUseLambda',
         body: req.body,
         json: true 
    }
    console.log(options)
    rp(options )
    .then(function (parsedBody) {
       res.send(parsedBody)
     
    })
    .catch(function (err) {

        console.log("The calling is failed"+err);
    });
    
}
function byRoute(req,res){
    var options  = {
        method: 'POST',
        uri: 'http://localhost:8080/getIntegratedFlightStatusByRouteUseLambda',
        body: req.body,
        json: true 
   }

   rp(options )
   .then(function (parsedBody) {
    
      res.send(parsedBody);
      
   })
   .catch(function (err) {
       console.log("The calling is failed");
   });

}
exports.byFlightNumber=byFlightNumber;
exports.byRoute=byRoute;