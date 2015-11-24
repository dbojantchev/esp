var express = require('express');
var router = express.Router();

var sqlServer         = require('../sqlServer/SqlServer');
var sqlServerDevices  = new sqlServer('devices');
var sqlServerSchool   = new sqlServer('school');

/* GET device data. */

router.get('/getCatalogData', function(req, res, next) {
    var getCatalogData = sqlServerDevices.getCatalogData(function(catalogData){
            console.log('catalogData=' + catalogData);
            res.send(catalogData);
        }
    );
});

module.exports = router;
