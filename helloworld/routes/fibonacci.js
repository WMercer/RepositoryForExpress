var express = require('express');
var router = express.Router();


router.post('/:length', (req, res)=> {
    const first =0;
    const second = 1;
    const length = req.params.length;
    var result = new Array();
    result[0] = first;
    if (length > 1) {
        result[1] = second;
        if (length > 2) {
            for (var i = 2; i < length; i++) {
                result[i] = result[i - 1]+ result[i - 2];
            }
        }
    }
    res.send(result);
});

module.exports = router;