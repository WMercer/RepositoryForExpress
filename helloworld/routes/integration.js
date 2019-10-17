var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app =express();
var rp = require('request-promise-native');
var springBootAPIs = require('../business/useSpringBootAPIs');
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({extended: true }));

router.post('/findByFlightNumber', (req, res)=> {
    console.log(req.body)
    console.log(springBootAPIs.byFlightNumber(req.body))
    res.send(springBootAPIs.byFlightNumber(req));
    
    // var options  = {
    //      method: 'POST',
    //      uri: 'http://localhost:8080/getIntegratedFlightStatusByFlightNumberUseLambda',
    //      body: req.body,
    //      json: true 
    // }

    // rp(options )
    // .then(function (parsedBody) {
    //   console.log(parsedBody);
    //    res.send(parsedBody);
       
    // })
    // .catch(function (err) {
    //     console.log("The calling is failed");
    // });
});

router.post('/findByRoute', (req, res)=> {
    
    var options  = {
         method: 'POST',
         uri: 'http://localhost:8080/getIntegratedFlightStatusByRouteUseLambda',
         body: req.body,
         json: true 
    }

    rp(options )
    .then(function (parsedBody) {
      console.log(parsedBody);
       res.send(parsedBody);
       
    })
    .catch(function (err) {
        console.log("The calling is failed");
    });
});


module.exports = router;