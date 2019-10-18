var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app =express();
var rp = require('request-promise-native');
var springBootAPIs = require('../business/useSpringBootAPIs');
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({extended: true }));

router.post('/findByFlightNumber', (req,res) => springBootAPIs.byFlightNumber(req,res));

router.post('/findByRoute', (req,res) => springBootAPIs.byRoute(req,res));


module.exports = router;