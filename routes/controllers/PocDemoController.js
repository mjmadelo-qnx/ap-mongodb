'use strict';

const TAG     = '[PocDemoController]';
const rekuire = require('rekuire');
const mongoose = require('mongoose');
const moment = require('moment');
const Logger  = rekuire('Logger');
const Errors  = rekuire('Errors');
const pocdemo   = rekuire('pocdemo');
const async   = require('async');

const PocDemoData = require('../../models/PocDemo/pocDemo');

function PocDemoController(req, res) {
  this.req = req;
  this.res = res;
};

//Get All Data
PocDemoController.prototype.getAllData = function(cb, result) {
  let ACTION = '[getAllData]';

  let id = this.req.params.meterId;
  let getData = PocDemoData.find({}).exec();
  getData.then((doc)=>{
      console.log(doc);
      if(doc.length > 0) {
          return cb(null, {
            meterassignemnt_id: doc[0].meterassignemnt_id,
            gross_datetime: moment(doc[0].gross_datetime).format('MM-DD-YYYY HH:MM:SS'),
            gross_load_mw: doc[0].gross_load_mw,
            net_datetime: moment(doc[0].net_datetime).format('MM-DD-YYYY HH:MM:SS'),
            net_load_mw: doc[0].net_load_mw,
            station_use_mwh: doc[0].station_use_mwh,
            frequency_hz: doc[0].frequency_hz,
            reactive_power_mv: doc[0].reactive_power_mv,
            frequency_status: doc[0].frequency_status,
            created_by: doc[0].created_by,
            created_date: moment(doc[0].created_date).format('MM-DD-YYYY HH:MM:SS')
          });
      } else {
          return cb(Errors.raise('BANKWIDE_CUSTOMER_NOTFOUND'));
      }
  }).catch((error)=>{
      Logger.log('error', TAG + ACTION, error);
      return cb(Errors.raise('BANKWIDE_ERROR', error));
  });
};

//Get Data
PocDemoController.prototype.getData = function(cb, result) {
    let ACTION = '[getData]';

    let id = this.req.params.meterId;
    let getData = PocDemoData.find({meterassignemnt_id: id}).exec();
    getData.then((doc)=>{
        if(doc.length > 0) {
            return cb(null, {
              meterassignemnt_id: doc[0].meterassignemnt_id,
              gross_datetime: moment(doc[0].gross_datetime).format('MM-DD-YYYY HH:MM:SS'),
              gross_load_mw: doc[0].gross_load_mw,
              net_datetime: moment(doc[0].net_datetime).format('MM-DD-YYYY HH:MM:SS'),
              net_load_mw: doc[0].net_load_mw,
              station_use_mwh: doc[0].station_use_mwh,
              frequency_hz: doc[0].frequency_hz,
              reactive_power_mv: doc[0].reactive_power_mv,
              frequency_status: doc[0].frequency_status,
              created_by: doc[0].created_by,
              created_date: moment(doc[0].created_date).format('MM-DD-YYYY HH:MM:SS')
            });
        } else {
            return cb(Errors.raise('BANKWIDE_CUSTOMER_NOTFOUND'));
        }
    }).catch((error)=>{
        Logger.log('error', TAG + ACTION, error);
        return cb(Errors.raise('BANKWIDE_ERROR', error));
    });
};


//Post Data
PocDemoController.prototype.postData = function(cb, result) {
  let ACTION = '[postData]';

  let grossDateTime = moment(this.req.body.gross_datetime).format('YYYY-MM-DDTHH:mm:ssZ');
  let netDateTime = moment(this.req.body.net_datetime).format('YYYY-MM-DDTHH:mm:ssZ');
  let createdDate = moment(this.req.body.created_date).format('YYYY-MM-DDTHH:mm:ssZ');

  let postData = new PocDemoData({
    _id: new mongoose.Types.ObjectId,
    meterassignemnt_id: this.req.body.meterassignemnt_id,
    gross_datetime: grossDateTime,
    gross_load_mw: this.req.body.gross_load_mw,
    net_datetime: netDateTime,
    net_load_mw: this.req.body.net_load_mw,
    station_use_mwh: this.req.body.station_use_mwh,
    frequency_hz: this.req.body.frequency_hz,
    reactive_power_mv: this.req.body.reactive_power_mv,
    frequency_status: this.req.body.frequency_status,
    created_by: this.req.body.created_by,
    created_date: createdDate
  }).save();
  postData.then((doc)=>{
    if(doc) {
      return cb(null, {message: "Data successfully saved."})
    } else {
      return cb(Errors.raise('BANKWIDE_CUSTOMER_NOTFOUND'));
    }
  }).catch((error)=>{
      Logger.log('error', TAG + ACTION, error);
      return cb(Errors.raise('BANKWIDE_ERROR', error));
  });
};

module.exports = PocDemoController;
