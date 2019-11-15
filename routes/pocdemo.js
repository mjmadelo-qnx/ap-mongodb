const TAG        = '[pocdemo]';
const express    = require('express');
const rekuire    = require('rekuire');
const async      = require('async');
const Logger     = rekuire('Logger');
const router     = express.Router();

const PocDemoController = rekuire('PocDemoController');
const PocDemoData = require('../models/PocDemo/pocDemo');


router.get('/:meterId', function(req, res, next) {
    var ACTION = '[getData]';
    Logger.log('debug', TAG + ACTION + ' request params', req.params);

    var _pocdemo = new PocDemoController(req);
    async.auto({
        getData:    _pocdemo.getData.bind(_pocdemo)
    }, function(err, result) {
        if(err) return res.error(err);
        else return res.ok(result.getData);
    });
});

router.post('/', function(req, res, next) {
    var ACTION = '[postData]';
    Logger.log('debug', TAG + ACTION + ' request body', req.body);

    var _pocdemo = new PocDemoController(req);
    async.auto({
        postData:    _pocdemo.postData.bind(_pocdemo)
    }, function(err, result) {
        if(err) return res.error(err);
        else return res.ok(result.postData);
    });
});

router.get('/', function(req, res, next) {
    var ACTION = '[getAllData]';
    Logger.log('debug', TAG + ACTION + ' request params', req.params);

    PocDemoData.find({}).exec()
        .then((result) => {
            res.send(result); 
        }).catch((err) => {
            res.status(500).send(err);
        });
});

router.post('/all', function(req, res, next) {
    var ACTION = '[postAllData]';
    Logger.log('debug', TAG + ACTION + ' request params', req.params);

    PocDemoData.insertMany(req.body)
        .then((result) => {
            res.send(result); 
        }).catch((err) => {
            res.status(500).send(err);
        });
});

module.exports = router;
