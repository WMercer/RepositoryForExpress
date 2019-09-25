var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app =express();
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({extended: true }));

router.post('/', (req, res)=> {
    var elementsList = new Array();
    var i =0;
    elementsList=req.body.elements;
    var numbOfPeople = req.body.elements.length;
    const interval =req.body.interval;
    const startIndex = req.body.startIndex;
   
   
    while( numbOfPeople > 1 ){
        if( startIndex+interval > numbOfPeople){
            var endIndex= interval+startIndex;
            while(endIndex > numbOfPeople) {
                var surplusPeopleOfLastRound = endIndex - numbOfPeople;
                startIndex = surplusPeopleOfLastRound - 1;
                endIndex = surplusPeopleOfLastRound;
            }
            elementsList.splice(startIndex);
            numbOfPeople=numbOfPeople-1;
        }else{
            elementsList.splice(startIndex+interval-1);
            numbOfPeople=numbOfPeople-1;

        }
    }
     
    res.json({ element : elementsList[0]});
});

  

module.exports = router;